module.exports = {
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  },
  presets: [
    "module:metro-react-native-babel-preset",
    "module:react-native-dotenv",
    "babel-preset-expo"
  ],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        rootPathSuffix: "src"
      }
    ]
  ]
};
