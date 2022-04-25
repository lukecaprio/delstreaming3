/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Streaming } from "../models";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function DeletePage(props) {
  const { streaming, overrides, ...rest } = props;
  const buttonOnClick = useDataStoreDeleteAction({
    id: streaming?.id,
    model: Streaming,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="548px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "DeletePage")}
    >
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="960px"
          height="228px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Type Lock Up")}
        >
          <Flex
            gap="10px"
            direction="column"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 419")}
          >
            <Flex
              gap="16px"
              direction="column"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Main Body")}
            >
              <Text
                fontFamily="Inter"
                fontSize="24px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="30px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                alignSelf="stretch"
                objectFit="cover"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Are You Sure You Want To Delete? "
                {...getOverrideProps(
                  overrides,
                  "Are You Sure You Want To Delete?"
                )}
              ></Text>
            </Flex>
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
            size="large"
            isDisabled={false}
            variation="primary"
            children="Delete"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
