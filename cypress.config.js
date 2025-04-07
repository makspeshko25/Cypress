const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

function getEnvConfig(envName) {
  const configFilePath = path.resolve(__dirname, `configFiles/cypress.${envName}.config.json`);

  if (fs.existsSync(configFilePath)) {
    return JSON.parse(fs.readFileSync(configFilePath));
  } else {
    console.warn(`⚠️  Config file for '${envName}' not found at ${configFilePath}`);
    return {};
  }
}

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      const envName = config.env.environment || "dev";
      const envConfig = getEnvConfig(envName);

      config.baseUrl = envConfig.baseUrl;
      config.env = {
        ...config.env,
        ...envConfig.env,
      };

      return config;
    },
  }
});