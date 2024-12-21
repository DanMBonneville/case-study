/** @type {import('jest').Config} */
const config = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

module.exports = config;
