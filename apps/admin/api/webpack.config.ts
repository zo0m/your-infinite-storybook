const { withAppEnvsPropagated } = require('../../../tools/utils/webpack');
const { composePlugins, withNx } = require('@nrwl/webpack');

module.exports = composePlugins(withNx(), withAppEnvsPropagated());