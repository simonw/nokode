/**
 * Get the model name for the current provider
 * @param {Object} config - Configuration object
 * @returns {string} Model name
 */
function getModelName(config) {
  switch (config.provider) {
    case 'anthropic':
      return config.anthropic.model;
    case 'openai':
      return config.openai.model;
    case 'cerebras':
      return config.cerebras.model;
    default:
      return config.anthropic.model;
  }
}

module.exports = { getModelName };
