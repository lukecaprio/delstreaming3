import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StreamingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Streaming {
  readonly id: string;
  readonly Artist?: string | null;
  readonly Song?: string | null;
  readonly StreamingCount?: number | null;
  readonly ArtistPic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Streaming, StreamingMetaData>);
  static copyOf(source: Streaming, mutator: (draft: MutableModel<Streaming, StreamingMetaData>) => MutableModel<Streaming, StreamingMetaData> | void): Streaming;
}