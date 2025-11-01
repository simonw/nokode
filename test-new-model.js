// Test that new default model is loaded correctly
require('dotenv').config();
process.env.LLM_PROVIDER = 'cerebras';
// Don't set CEREBRAS_MODEL to test the default

delete require.cache[require.resolve('./src/config/index.js')];
const config = require('./src/config/index.js');

console.log('Testing new default Cerebras model...');
console.log('Provider:', config.provider);
console.log('Default model:', config.cerebras.model);

if (config.cerebras.model === 'qwen-3-coder-480b') {
  console.log('\n✓ Default model test PASSED');
  process.exit(0);
} else {
  console.log('\n✗ Default model test FAILED');
  console.log('Expected: qwen-3-coder-480b');
  console.log('Got:', config.cerebras.model);
  process.exit(1);
}
