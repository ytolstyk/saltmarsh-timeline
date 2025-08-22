import { useState } from "react";
import {
  Bold,
  Controls,
  ImportControls,
  SuccessMessage,
  IconWrapper,
  UploadWrapper,
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
import { BsHandIndex } from "react-icons/bs";
import { Button, Code, Group, Table, Text } from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";

const HEADERS = ["Day", "Month", "Year", "Event", "Description", "Tags"];
const JSON_EXAMPLE = `{
  "date": "1,3,-700",
  "title": "The Battle of Town",
  "description": "We really had it out for that bad guy.",
  "tags": "lore,battle"
}`;

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

  const handleFileChange = (files: FileWithPath[]) => {
    const selectedFile = files?.[0] || null;

    setFile(selectedFile);

    if (selectedFile) {
      setScreen(null);
      readJSON(selectedFile);
    }
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

  const renderUpload = () => {
    return (
      <Dropzone
        onDrop={handleFileChange}
        maxSize={5 * 1024 ** 2}
        accept={["application/json"]}
        mb="lg"
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              size={52}
              color="var(--mantine-color-blue-6)"
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              size={52}
              color="var(--mantine-color-dimmed)"
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag events JSON here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Your file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
    );
  };

  const renderTableRows = () => {
    return previewArray.map((row, rowIndex) => (
      <Table.Tr key={rowIndex}>
        {Object.keys(row).map((key) => {
          if (key === "days") {
            return (
              <Table.Td w="8rem" key={key}>
                {row[key]} - {DAYS[(row[key] - 1) % 7]}
              </Table.Td>
            );
          }

          if (key === "months") {
            return (
              <Table.Td w="8rem" key={key}>
                {row[key]} - {MONTHS[row[key] - 1][0]}
              </Table.Td>
            );
          }

          if (key === "tags") {
            return <Table.Td key={key}>{row[key]?.join(", ")}</Table.Td>;
          }

          // @ts-expect-error i get keys from the row and keying back into it. shut up!
          return <Table.Td key={key}>{row[key]}</Table.Td>;
        })}
      </Table.Tr>
    ));
  };

  const validationResult = validateJSONArray(previewArray);

  const isPreviewArray = previewArray?.length > 1;
  const noFileNoPreview = !file && !isPreviewArray;

  return (
    <div>
      <RenderIf condition={screen === "success"}>
        <SuccessMessage>Successfully imported events!</SuccessMessage>
      </RenderIf>
      <RenderIf condition={noFileNoPreview}>
        <UploadWrapper>
          <div>
            <Text mb="lg">Expected format:</Text>
            <Code block>{JSON_EXAMPLE}</Code>
            <Text size="sm">The date is formatted as day, month, year</Text>
          </div>
          {renderUpload()}
        </UploadWrapper>
      </RenderIf>
      <RenderIf condition={isPreviewArray && !validationResult.isValid}>
        <p>{validationResult.message}</p>
      </RenderIf>
      <RenderIf condition={isPreviewArray && validationResult.isValid}>
        Preview of <Bold $inline>{file ? file.name : "seed data"}</Bold>
        <Controls>
          <Button variant="default" onClick={reset}>
            Reset
          </Button>
          <ImportControls>
            <IconWrapper>
              <BsHandIndex size={25} />
            </IconWrapper>
            <Button variant="primary" onClick={handleAppendClick}>
              Append
            </Button>
            <Button variant="primary" onClick={handleOverrideClick}>
              Override
            </Button>
          </ImportControls>
        </Controls>
        <Table.ScrollContainer minWidth={500} maxHeight="70vh" mt="md">
          <Table verticalSpacing="sm" highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                {HEADERS.map((header, index) => (
                  <Table.Th key={index}>{header}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{renderTableRows()}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </RenderIf>
    </div>
  );
}
