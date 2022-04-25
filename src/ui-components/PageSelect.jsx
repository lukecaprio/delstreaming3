/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, SearchField, View } from "@aws-amplify/ui-react";
export default function PageSelect(props) {
  const { overrides, ...rest } = props;
  const buttonThreeOneZeroOneThreeOneZeroFiveOnClick = useNavigateAction({
    type: "url",
    url: "/details",
  });
  const buttonThreeOneZeroOneThreeOneZeroNineOnClick = useNavigateAction({
    type: "url",
    url: "/artists",
  });
  const buttonThreeOneZeroOneThreeOneOneThreeOnClick = useNavigateAction({
    type: "url",
    url: "/albums",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "PageSelect")}
    >
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={true}
        variation="primary"
        children="Songs"
        onClick={() => {
          buttonThreeOneZeroOneThreeOneZeroFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Button31013105")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={true}
        variation="primary"
        children="Artist"
        onClick={() => {
          buttonThreeOneZeroOneThreeOneZeroNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button31013109")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="40px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={true}
        variation="primary"
        children="Album"
        onClick={() => {
          buttonThreeOneZeroOneThreeOneOneThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button31013113")}
      ></Button>
      <Flex
        gap="32px"
        direction="row"
        width="866px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="866px"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <SearchField
          display="none"
          gap="8px"
          direction="column"
          width="300px"
          shrink="0"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          display="none"
          {...getOverrideProps(overrides, "Icon")}
        ></View>
      </Flex>
    </Flex>
  );
}
