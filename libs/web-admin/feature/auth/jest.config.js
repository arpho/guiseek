module.exports = {
  name: 'web-admin-feature-auth',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-admin/feature/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
