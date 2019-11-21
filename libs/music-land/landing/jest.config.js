module.exports = {
  name: 'music-land-landing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/music-land/landing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
