const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  retries: 2,
  video: true,
  videoCompression: 32,
  videosFolder: "cypress/videos",
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshots",
  e2e: {
    baseUrl: "https://your-app.com",
    setupNodeEvents(on, config) {
      on("after:spec", (spec, results) => {
        console.log("Video recorded:", results.video);
      });
    }
  }
});