import { useEffect, useState } from "react";
import {
  Bold,
  Controls,
  ImportControls,
  SuccessMessage,
  Table,
  UploadLabel,
} from "./CSVModal.styles";
import { RenderIf } from "./RenderIf";
import { convertCSVToEvents, validateCSVArray } from "./csvHelper";
import { DAYS, MONTHS } from "./dateHelper";
import { useEvents } from "./useEvents";
import { CSVModalPreview } from "./types";

const HEADERS = ["Day", "Month", "Year", "Event", "Description", "Tags"];

export function CSVModal() {
  const [file, setFile] = useState<File | null>(null);
  const [previewArray, setPreviewArray] = useState<CSVModalPreview>([]);
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
    const events = convertCSVToEvents(previewArray);

    appendEvents(events);
    reset();
    setScreen("success");
  };

  const handleOverrideClick = () => {
    const events = convertCSVToEvents(previewArray);

    overrideEvents(events);
    reset();
    setScreen("success");
  };

  const readCSV = (file: File) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const csv = event.target?.result;
      // @ts-expect-error csv is a string here
      const lines = csv?.split("\n");
      const data = [];

      for (const line of lines) {
        const values = line.split(",");
        data.push(values);
      }

      setPreviewArray(data);
    };

    reader.readAsText(file);
  };

  useEffect(() => {
    if (file) {
      setScreen(null);
      readCSV(file);
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
          accept=".csv"
        />
      </UploadLabel>
    );
  };

  const renderTableRows = () => {
    return previewArray.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => {
          if (cellIndex === 0) {
            return (
              <td key={cellIndex}>
                {cell} - {DAYS[Number(cell)]}
              </td>
            );
          }

          if (cellIndex === 1) {
            return (
              <td key={cellIndex}>
                {cell} - {MONTHS[Number(cell)][0]}
              </td>
            );
          }

          return <td key={cellIndex}>{cell}</td>;
        })}
      </tr>
    ));
  };

  const validationResult = validateCSVArray(previewArray);

  return (
    <div>
      <h2>CSV Import</h2>
      <RenderIf condition={screen === "success"}>
        <SuccessMessage>Successfully imported events!</SuccessMessage>
      </RenderIf>
      <RenderIf condition={!file}>
        <div>
          <p>Click the button or drag and drop your file below.</p>
          <div>
            The expected format is
            <Bold>day: number</Bold>
            <Bold>month: number</Bold>
            <Bold>year: number</Bold>
            <Bold>title: string</Bold>
            <Bold>description: string</Bold>
            <Bold>tags: string|string|string...</Bold>
          </div>
        </div>
        {renderUpload()}
      </RenderIf>
      <RenderIf condition={Boolean(file) && !validationResult.isValid}>
        <p>{validationResult.message}</p>
      </RenderIf>
      <RenderIf condition={Boolean(file) && validationResult.isValid}>
        Preview of <Bold>{file?.name}</Bold>
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
      </RenderIf>
    </div>
  );
}
