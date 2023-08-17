import { defineConfig } from 'dumi';

const repo = 'metagalaxy_dumi'; // 项目名
export default defineConfig({
  themeConfig: {
    name: 'metagalaxy',
  },
  base: process.env.NODE_ENV === 'production' ? `/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/` : '/',
});
