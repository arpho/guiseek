module.exports = {
  name: 'web-admin-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/web-admin/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
