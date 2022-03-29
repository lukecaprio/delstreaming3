/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Streaming } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardA from "./CardA";
import { Collection } from "@aws-amplify/ui-react";
export default function StreamingTHREE(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Streaming,
        }).items;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "StreamingTHREE")}
    >
      {(item, index) => (
        <CardA
          Streams={item}
          height="auto"
          width="auto"
          margin="0 0px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardA>
      )}
    </Collection>
  );
}
