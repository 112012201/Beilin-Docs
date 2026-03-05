/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'line-md:home-md' },
  { text: '指南', link: '/guide/intro/', icon: 'line-md:compass' },
  { text: '归档', link: '/archives/first/', icon: 'line-md:clipboard-arrow' },
  { text: '友情链接', link: '/friends/', icon: 'line-md:telegram' },
])
