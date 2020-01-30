module.exports = {
  extends: ["semantic-release-commit-filter"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      ("@semantic-release/git",
      {
        assets: ["packages/**/CHANGELOG.md", "package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      })
    ]
  ],
  release: {
    branches: ["master"]
  }
};
