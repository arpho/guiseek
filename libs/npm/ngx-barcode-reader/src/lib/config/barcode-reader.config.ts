import { IBarcodeReaderConfig } from '../barcode-reader.interfaces';

export const BARCODE_READER_CONFIG: IBarcodeReaderConfig = {
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    target: null,
    constraints: {
      width: { min: 640 },
      height: { min: 480 },
      aspectRatio: { min: 1, max: 100 },
      facingMode: 'environment' // or user
    },
    singleChannel: false // true: only the red color-channel is read
  },
  frequency: 1,
  locator: {
    patchSize: 'medium',
    halfSample: true
  },
  locate: true,
  numOfWorkers: 4,
  decoder: {
    readers: ['ean_reader', 'ean_8_reader', 'upc_reader', 'code_128_reader', 'codabar']
    // readers: ['code_128_reader']
  }
};

export const BARCODE_READERS = [
  'code_128',
  'code_39',
  'code_39_vin',
  'ean',
  'ean_extended',
  'ean_8',
  'ean_13',
  'upc',
  'upc_e',
  'codabar',
  'i2of5',
  '2of5',
  'code_93'
];

export function mapToReader(value) {
  return [value + '_reader'];
}
