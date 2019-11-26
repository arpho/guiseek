module.exports = {
  name: 'ngx-barcode-reader',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/npm/ngx-barcode-reader',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
