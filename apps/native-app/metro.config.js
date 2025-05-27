/* eslint-disable @typescript-eslint/no-var-requires */
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Blocks Metro from watching temporary build directories (prevents ENOENT errors)
    blockList: [
      /.*\.cxx\/.*/,
      /.*\.cmake\/.*/,
      /.*\.build\/.*/,
      /.*\.git\/.*/
    ]
  },
};

module.exports = withNativeWind(
  mergeConfig(getDefaultConfig(__dirname), config),
  {input: './global.css'},
);