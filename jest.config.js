const config = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  },
  testMatch: [
    "**/test/**/*.test.ts"
  ],
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
};

module.exports = config;
