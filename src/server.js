const express = require('express');
const config = require('./config');
const handleLLMRequest = require('./middleware/llm-handler');
const Logger = require('./utils/logger');

const app = express();

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All requests are handled by the LLM
app.use(handleLLMRequest);

// Start the server
app.listen(config.port, () => {
  console.log(`🤖 nokode server running on http://localhost:${config.port}`);
  console.log(`🧠 Using ${config.provider} provider`);

  const model = config.provider === 'anthropic' ? config.anthropic.model : 
                config.provider === 'cerebras' ? config.cerebras.model :
                config.openai.model;
  console.log(`⚡ Model: ${model}`);

  console.log(`🚀 Every request will be handled by AI. Make any HTTP request and see what happens.`);
  console.log(`💰 Warning: Each request costs API tokens!`);
});