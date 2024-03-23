export type Segment = {
  start: number;
  end: number;
  text: string;
};
export type Transcription = {
  language: string;
  duration: number;
  text: string;
  segments: Segment[];
};
