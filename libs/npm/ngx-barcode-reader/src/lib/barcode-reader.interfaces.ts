export interface IBarcodeReaderConfig {
  inputStream: {
    name?: string;
    type: string;
    target: any;
    constraints: {
      width?: {
        min?: number;
      };
      height?: {
        min?: number;
      };
      aspectRatio?: {
        min: number;
        max: number;
      };
      facingMode?: string;
    };
    singleChannel?: boolean;
  };
  frequency?: number;
  locator?: {
    patchSize: 'medium' | 'small';
    halfSample: true;
  };
  locate?: boolean;
  numOfWorkers?: number;
  decoder: {
    readers: string[];
  };
}

export interface StartInfo {
  error: number;
  code: number;
  start: number;
  end: number;
}

export interface DecodedCode {
  code: number;
  start: number;
  end: number;
  error?: number;
}

export interface CodeResult {
  code: string;
  start: number;
  end: number;
  codeset: string;
  startInfo: StartInfo;
  decodedCodes: DecodedCode[];
  direction: number;
  format: string;
}

export interface Line {
  x: number;
  y: number;
}

export interface IBarcodeReaderResult {
  codeResult: CodeResult;
  line: Line[];
  angle: number;
  pattern: number[];
  box: number[][];
  boxes: number[][][];
}
