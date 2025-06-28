/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../my-app/src/StoryComp/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config) => {
    // Remove default svg handling so we can apply SVGR
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('svg')) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    // Add custom SVG rule for .svg in .jsx/.tsx/.mdx files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(jsx?|tsx?|mdx)$/, // 👈 enable for MDX as well
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            icon: true,
            exportType: 'default', // 👈 MDX requires default export
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: '(fill|stroke)', 
                  },
                },
              ],
            },
          },
        },
        {
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default config;