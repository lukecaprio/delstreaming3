/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Streaming } from "../models";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  StepperField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Edit1(props) {
  const { streaming, overrides, ...rest } = props;
  const [
    textFieldThreeZeroNineFiveThreeThreeFourNineValue,
    setTextFieldThreeZeroNineFiveThreeThreeFourNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroNineFiveThreeThreeFourEightValue,
    setTextFieldThreeZeroNineFiveThreeThreeFourEightValue,
  ] = useStateMutationAction("");
  const [stepperFieldValue, setStepperFieldValue] =
    useStateMutationAction(undefined);
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      Artist: textFieldThreeZeroNineFiveThreeThreeFourNineValue,
      Song: textFieldThreeZeroNineFiveThreeThreeFourEightValue,
      StreamingCount: stepperFieldValue,
      ArtistPic: textFieldThreeZeroNineFiveThreeThreeFourEightValue,
    },
    id: streaming?.id,
    model: Streaming,
  });
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/details" });
  useEffect(() => {
    if (
      textFieldThreeZeroNineFiveThreeThreeFourNineValue === "" &&
      streaming !== undefined &&
      streaming?.Artist !== undefined
    )
      setTextFieldThreeZeroNineFiveThreeThreeFourNineValue(streaming?.Artist);
  }, [streaming]);
  useEffect(() => {
    if (
      textFieldThreeZeroNineFiveThreeThreeFourEightValue === "" &&
      streaming !== undefined &&
      streaming?.Song !== undefined
    )
      setTextFieldThreeZeroNineFiveThreeThreeFourEightValue(streaming?.Song);
  }, [streaming]);
  useEffect(() => {
    if (
      stepperFieldValue === undefined &&
      streaming !== undefined &&
      streaming?.StreamingCount !== undefined
    )
      setStepperFieldValue(streaming?.StreamingCount);
  }, [streaming]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Edit1")}
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
            children="Edit Stream"
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
          {...getOverrideProps(overrides, "Divider30953342")}
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
          {...getOverrideProps(overrides, "Divider30953346")}
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
            value={textFieldThreeZeroNineFiveThreeThreeFourEightValue}
            onChange={(event) => {
              setTextFieldThreeZeroNineFiveThreeThreeFourEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30953348")}
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
            value={textFieldThreeZeroNineFiveThreeThreeFourNineValue}
            onChange={(event) => {
              setTextFieldThreeZeroNineFiveThreeThreeFourNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30953349")}
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
            value={streaming?.ArtistPic}
            {...getOverrideProps(overrides, "TextField30953351")}
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
            {...getOverrideProps(overrides, "TextField30953352")}
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
          children="Edit"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseOut={() => {
            buttonOnMouseOut();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
