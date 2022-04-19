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
  StepperField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Streaming4(props) {
  const { streaming4, overrides, ...rest } = props;
  const [textFieldjqnValue, setTextFieldjqnValue] = useStateMutationAction("");
  const [textFieldsnvValue, setTextFieldsnvValue] = useStateMutationAction("");
  const [stepperFieldValue, setStepperFieldValue] =
    useStateMutationAction(undefined);
  const [textFieldggtValue, setTextFieldggtValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      Artist: textFieldjqnValue,
      Song: textFieldsnvValue,
      StreamingCount: stepperFieldValue,
      ArtistPic: textFieldggtValue,
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
      {...rest}
      {...getOverrideProps(overrides, "Streaming4")}
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
          {...getOverrideProps(overrides, "Dividerggd")}
        ></Divider>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividereng")}
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
            placeholder="John Doe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldsnvValue}
            onChange={(event) => {
              setTextFieldsnvValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldsnv")}
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
            placeholder="Seattle, WA"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldjqnValue}
            onChange={(event) => {
              setTextFieldjqnValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldjqn")}
          ></TextField>
          <StepperField
            display="flex"
            gap="8px"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Streaming Count"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={stepperFieldValue}
            onStepChange={(value) => setStepperFieldValue(value)}
            {...getOverrideProps(overrides, "StepperField")}
          ></StepperField>
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
            label="Artist Picture"
            placeholder="Seattle, WA"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldggtValue}
            onChange={(event) => {
              setTextFieldggtValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextFieldggt")}
          ></TextField>
          <TextField
            display="none"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            placeholder="john.doe@awsamplify.com"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextFieldpyh")}
          ></TextField>
        </Flex>
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
