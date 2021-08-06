module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@utils': './src/utils',
          '@themes': './src/themes',
          '@pages': './src/pages',
          '@components': './src/components',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
};
