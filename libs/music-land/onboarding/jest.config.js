module.exports = {
  name: 'music-land-onboarding',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/music-land/onboarding',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
