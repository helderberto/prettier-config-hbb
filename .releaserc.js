module.exports = {
  branch: 'main',
  plugins: [
    '@semantic-release/commit-analyser',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore: release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};