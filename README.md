# 北林文档站

The Site is generated using [vuepress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## 想要贡献?
看下方教程
Fork仓库让后修改后PR回本仓库

## 安装
由于GitHub的25MB限制导致无法完全上传依赖项目
你需要git本仓库后安装依赖才能开发本档案
你需要安装Node.js的^23.x.x.x版本以及pnpm ^10

```sh
pnpm i
```

## 开始开发

> [!TIP]
> 你不需要执行下方的pnpm docs:build来构建项目
> 你提交的PR通过后会自动构建

启用开发服务器 pnpm docs:dev
然后按照 [vuepress](https://theme-plume.vuejs.press/guide/markdown) 的要求来编写文档
文档内容均存在 ./docs/guide/ 文件夹内

```sh
# start dev server
pnpm docs:dev
# build for production
pnpm docs:build
# preview production build in local
pnpm docs:preview
# update vuepress and theme
pnpm vp-update
```

## Documents

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
