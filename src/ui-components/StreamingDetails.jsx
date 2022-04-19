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
import CardF from "./CardF";
import { Collection } from "@aws-amplify/ui-react";
export default function StreamingDetails(props) {
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
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "StreamingDetails")}
    >
      {(item, index) => (
        <CardF
          streaming={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardF>
      )}
    </Collection>
  );
}
