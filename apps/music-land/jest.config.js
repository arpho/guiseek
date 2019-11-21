module.exports = {
  name: 'music-land',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/music-land',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
