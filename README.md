# Yemin Pixel Homepage

张俊豪 / Yemin 的像素个人主页，展示个人项目和 MOSSLUME 游戏画面，包含可交互的 3D 掌机、滚动动效与图片画廊。

在线访问：[yemin11238.github.io/yemin-pixel-homepage](https://yemin11238.github.io/yemin-pixel-homepage/)

## 本地预览

需要 Node.js，无需安装依赖或构建。

```sh
node preview.mjs
```

打开 [http://127.0.0.1:4173/yemin-pixel-homepage/](http://127.0.0.1:4173/yemin-pixel-homepage/)。端口被占用时运行 `PORT=4180 node preview.mjs`。请使用 HTTP 服务预览，直接双击 HTML 无法加载 Spline 模块和 WASM。

## 部署与修改

GitHub Pages 发布 `dist/` 目录，仓库路径为 `/yemin-pixel-homepage/`。页面资源、Spline 场景及画廊图片均使用相对路径；字体、运行时和解码器随站点提供，无需 API key。

- `dist/index.html`：个人介绍、作品卡片、项目链接。
- `dist/personal.css`、`dist/personal.js`：适配、加载状态与滚动交互。
- `dist/game-gallery.js`：MOSSLUME 图片画廊。
- `dist/assets/yemin.splinecode`：保留原模型和动画的个人化场景，11 个屏幕槽已替换。
- `dist/projects.json`：项目元数据备份；修改它不会自动更新 HTML。
- `dist/vendor/`：固定版本运行时，保持目录结构。

这是独立的像素版仓库，原个人主页不受影响。

## 来源与署名

版式、像素装饰、Spline 原模型及原交互来自 [Pixel Player](https://pixel-player.webflow.io/)，原作者 [Zoe Tang](https://www.zoetang.work/)。本仓库是该参考站的个人化改造，不将原模型和装饰署名为 Yemin 原创，也不以本仓库授予第三方素材额外许可。

个人项目截图来自 Yemin 的原网站及对应项目；MOSSLUME 图片由 Yemin 提供并原样保留。Spline Runtime 2.0.111、Webflow、jQuery、Lenis 与 Draco 等保留各自权利和许可；字体 OFL 文本保留在 `dist/assets/`。动效说明见 [MOTION-NOTES.md](MOTION-NOTES.md)。
