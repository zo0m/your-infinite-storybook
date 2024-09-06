const { withEnvDefined, withPug } = require('../../../tools/utils/webpack');
const { composePlugins } = require('@nrwl/webpack');

const supportedEnvKeys = ['API_HOST', 'API_PORT', 'API_GLOBAL_PREFIX'];

module.exports = composePlugins(withPug(), withEnvDefined(supportedEnvKeys));
