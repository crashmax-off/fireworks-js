import path from 'path'
import webpack from 'webpack'
import pkg from './package.json'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const outputPath = path.resolve(__dirname, 'dist')
const banner = `${pkg.name} ${pkg.version} by ${pkg.author.name} (${pkg.author.url})
${pkg.homepage}
License ${pkg.license}`

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: {
    'fireworks': path.join(__dirname, 'src/fireworks.ts'),
    'react': path.join(__dirname, 'src/react.tsx')
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devServer: {
    open: true,
    https: true,
    port: 8080,
    writeToDisk: true,
    contentBase: outputPath
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: {
    './fireworks': './fireworks',
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'ts-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      esmodules: true
                    }
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      version: JSON.stringify(pkg.version)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: outputPath
        }
      ]
    })
  ]
} as webpack.Configuration