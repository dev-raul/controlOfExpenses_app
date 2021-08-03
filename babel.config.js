module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@utils': './src/utils',
          '@themes': './src/themes',
          '@pages': './src/pages',
          '@components': './src/components',
        },
      },
    ],
  ],
};
