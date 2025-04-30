import { useEffect, useState } from "react";
import {
  Bold,
  Controls,
  ImportControls,
  SuccessMessage,
  Table,
  UploadLabel,
} from "./JSONModal.styles";
import { RenderIf } from "./RenderIf";
import {
  convertJSONDataToBlobs,
  convertJSONToEvents,
  validateJSONArray,
} from "./jsonHelper";
import { DAYS, MONTHS } from "./dateHelper";
import { useEvents } from "./useEvents";
import { JSONPreviewBlob } from "./types";

const HEADERS = ["Day", "Month", "Year", "Event", "Description", "Tags"];

type Props = {
  initialData?: JSONPreviewBlob[];
};

export function JSONModal({ initialData }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [previewArray, setPreviewArray] = useState<JSONPreviewBlob[]>(
    initialData ?? []
  );
  const { appendEvents, overrideEvents } = useEvents();
  const [screen, setScreen] = useState<"success" | null>(null);

  const reset = () => {
    setFile(null);
    setPreviewArray([]);
    setScreen(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;

    setFile(selectedFile);
  };

  const handleAppendClick = () => {
    const events = convertJSONToEvents(previewArray);

    appendEvents(events);
    reset();
    setScreen("success");
  };

  const handleOverrideClick = () => {
    const events = convertJSONToEvents(previewArray);

    overrideEvents(events);
    reset();
    setScreen("success");
  };

  const readJSON = (file: File) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const json = event.target?.result;
      // @ts-expect-error json is a string here
      const data = convertJSONDataToBlobs(JSON.parse(json));

      setPreviewArray(data);
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    if (file) {
      setScreen(null);
      readJSON(file);
    }
  }, [file]);

  const renderUpload = () => {
    const label = file ? file.name : "Upload a file";

    return (
      <UploadLabel htmlFor="file-upload">
        {label}
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept=".json"
        />
      </UploadLabel>
    );
  };

  const renderTableRows = () => {
    return previewArray.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {Object.keys(row).map((key) => {
          if (key === "days") {
            return (
              <td key={key}>
                {row[key]} - {DAYS[row[key] - 1]}
              </td>
            );
          }

          if (key === "months") {
            return (
              <td key={key}>
                {row[key]} - {MONTHS[row[key] - 1][0]}
              </td>
            );
          }

          if (key === "tags") {
            return <td key={key}>{row[key]?.join(",")}</td>;
          }

          // @ts-expect-error key comes from the row object
          return <td key={key}>{row[key]}</td>;
        })}
      </tr>
    ));
  };

  const validationResult = validateJSONArray(previewArray);

  const isPreviewArray = previewArray?.length > 1;
  const noFileNoPreview = !file && !isPreviewArray;

  return (
    <div>
      <h2>JSON Import</h2>
      <RenderIf condition={screen === "success"}>
        <SuccessMessage>Successfully imported events!</SuccessMessage>
      </RenderIf>
      <RenderIf condition={noFileNoPreview}>
        <div>
          <p>Click the button or drag and drop your file below.</p>
          <div>
            The expected format is
            <Bold>
              date: "day{"<number>"},month{"<number>"},year{"<number>"}"
            </Bold>
            <Bold>title: string</Bold>
            <Bold>description: string</Bold>
            <Bold>tags: string|string|string...</Bold>
          </div>
        </div>
        {renderUpload()}
      </RenderIf>
      <RenderIf condition={isPreviewArray && !validationResult.isValid}>
        <p>{validationResult.message}</p>
      </RenderIf>
      <RenderIf condition={isPreviewArray && validationResult.isValid}>
        Preview of <Bold $inline>{file ? file.name : "seed data"}</Bold>
        <Controls>
          <button type="button" onClick={reset}>
            Reset
          </button>
          <ImportControls>
            <button type="button" onClick={handleAppendClick}>
              Append
            </button>
            <button type="button" onClick={handleOverrideClick}>
              Override
            </button>
          </ImportControls>
        </Controls>
        <Table>
          <thead>
            <tr>
              {HEADERS.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </Table>
      </RenderIf>
    </div>
  );
}
