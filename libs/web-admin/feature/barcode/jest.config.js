module.exports = {
  name: 'web-admin-feature-barcode',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-admin/feature/barcode',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
