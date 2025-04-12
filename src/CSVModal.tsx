import { useEffect, useState } from "react";
import {
  Bold,
  Controls,
  ImportControls,
  Table,
  UploadLabel,
} from "./CSVModal.styles";
import { RenderIf } from "./RenderIf";
import { convertCSVToEvents, validateCSVArray } from "./csvHelper";
import { DAYS, MONTHS } from "./dateHelper";
import { useEvents } from "./useEvents";

const HEADERS = ["Day", "Month", "Year", "Event", "Description"];

export function CSVModal() {
  const [file, setFile] = useState<File | null>(null);
  const [previewArray, setPreviewArray] = useState<Array<T[]>>([]);
  const { appendEvents, overrideEvents } = useEvents();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;

    setFile(selectedFile);
  };

  const handleAppendClick = () => {
    const events = convertCSVToEvents(previewArray);

    appendEvents(events);
  };

  const handleOverrideClick = () => {
    const events = convertCSVToEvents(previewArray);

    overrideEvents(events);
  };

  const readCSV = (file: File) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const csv = event.target?.result;
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

  const validationResult = validateCSVArray(previewArray);

  return (
    <div>
      <h2>CSV Import</h2>
      <RenderIf condition={!file}>
        <div>
          <p>Click the button or drag and drop your file below.</p>
          <p>
            The expected format is <Bold>day,month,year,title,description</Bold>{" "}
            with the types <Bold>number,number,number,string,string</Bold>
          </p>
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
          <tbody>
            {previewArray.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  if (cellIndex === 0) {
                    return (
                      <td key={cellIndex}>
                        {cell} - {DAYS[cell]}
                      </td>
                    );
                  }

                  if (cellIndex === 1) {
                    return (
                      <td key={cellIndex}>
                        {cell} - {MONTHS[cell][0]}
                      </td>
                    );
                  }

                  return <td key={cellIndex}>{cell}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </Table>
        <Controls>
          <button
            type="button"
            onClick={() => {
              setFile(null);
              setPreviewArray([]);
            }}
          >
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
