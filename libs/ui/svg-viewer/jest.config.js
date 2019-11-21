module.exports = {
  name: 'ui-svg-viewer',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/svg-viewer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
