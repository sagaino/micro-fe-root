const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      }
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "root",
          filename: "remoteEntry.js",
          remotes: {
            home: "home@https://micro-fe-home.vercel.app/remoteEntry.js"
          },
          shared: {
            ...deps,
            // ui: {
            //   singleton: true,
            // },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ]
    }
  },
});