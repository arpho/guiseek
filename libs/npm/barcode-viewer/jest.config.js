module.exports = {
  name: 'barcode-viewer',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/npm/barcode-viewer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
