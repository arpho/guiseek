module.exports = {
  name: 'web-app-feature-landing',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/web-app/feature/landing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
