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
export default function Streaming5(props) {
  const { streaming, overrides, ...rest } = props;
  const [
    textFieldThreeZeroNineFiveThreeOneNineSevenValue,
    setTextFieldThreeZeroNineFiveThreeOneNineSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroNineFiveThreeOneNineSixValue,
    setTextFieldThreeZeroNineFiveThreeOneNineSixValue,
  ] = useStateMutationAction("");
  const [stepperFieldValue, setStepperFieldValue] =
    useStateMutationAction(undefined);
  const [
    textFieldThreeZeroNineFiveThreeOneNineNineValue,
    setTextFieldThreeZeroNineFiveThreeOneNineNineValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      Artist: textFieldThreeZeroNineFiveThreeOneNineSevenValue,
      Song: textFieldThreeZeroNineFiveThreeOneNineSixValue,
      StreamingCount: stepperFieldValue,
      ArtistPic: textFieldThreeZeroNineFiveThreeOneNineNineValue,
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
      {...getOverrideProps(overrides, "Streaming5")}
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
          {...getOverrideProps(overrides, "Divider30953190")}
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
          {...getOverrideProps(overrides, "Divider30953194")}
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
            value={textFieldThreeZeroNineFiveThreeOneNineSixValue}
            onChange={(event) => {
              setTextFieldThreeZeroNineFiveThreeOneNineSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30953196")}
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
            value={textFieldThreeZeroNineFiveThreeOneNineSevenValue}
            onChange={(event) => {
              setTextFieldThreeZeroNineFiveThreeOneNineSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30953197")}
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
            placeholder="www.url.com"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroNineFiveThreeOneNineNineValue}
            onChange={(event) => {
              setTextFieldThreeZeroNineFiveThreeOneNineNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30953199")}
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
            {...getOverrideProps(overrides, "TextField30953200")}
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
