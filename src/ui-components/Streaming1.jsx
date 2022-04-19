/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Streaming } from "../models";
import {
  Button,
  Divider,
  Flex,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Streaming1(props) {
  const { streaming, overrides, ...rest } = props;
  const [textFieldcqfValue, setTextFieldcqfValue] = useStateMutationAction("");
  const [textFieldpquValue, setTextFieldpquValue] = useStateMutationAction("");
  const [textFieldfmcValue, setTextFieldfmcValue] = useStateMutationAction("");
  const [textFieldonyValue, setTextFieldonyValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      Artist: textFieldcqfValue,
      StreamingCount: textFieldpquValue,
      ArtistPic: textFieldfmcValue,
      Song: textFieldonyValue,
    },
    model: Streaming,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      as="form"
      {...rest}
      {...getOverrideProps(overrides, "Streaming1")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="246px"
            height="23px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Stream&#xA;"
            {...getOverrideProps(overrides, "Create Stream")}
          ></Text>
          <View
            width="100px"
            height="100px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 417")}
          ></View>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividerlgh")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Song Title"
            placeholder={streaming?.Song}
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldonyValue}
            onChange={(event) => {
              setTextFieldonyValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldony")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Artist Name"
            placeholder={streaming?.Artist}
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldcqfValue}
            onChange={(event) => {
              setTextFieldcqfValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldcqf")}
          ></TextField>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(43,51,59,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Streaming Count"
            {...getOverrideProps(overrides, "label")}
          ></Text>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            placeholder="100"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldpquValue}
            onChange={(event) => {
              setTextFieldpquValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldpqu")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Artist URL"
            placeholder="data:image/jpeg;base64,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"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldfmcValue}
            onChange={(event) => {
              setTextFieldfmcValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldfmc")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividercgs")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(4,125,149,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
