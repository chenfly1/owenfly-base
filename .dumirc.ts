import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Alita ComLab',
    title: 'Alita ComLab',
    logo: false,
    rtl: false,
    description: '零洞科技 · 前端团队通用组件、解决方案沉淀平台',
    nav: [
      {
        title: '指南',
        link: '/guides',
      },
      {
        title: '博客',
        link: '/blogs/overview',
      },
      {
        title: '更新日志',
        link: '/changelogs',
      },
    ],
    sidebarGroupModePath: ['/guides'],
    actions: [
      {
        type: 'primary',
        text: '开始使用',
        link: '/guides',
      },
      {
        text: '博客',
        link: '/blogs/overview',
      },
    ],
    footer:
      'Made with<span style="color: rgb(255, 255, 255);">❤</span>by <span>零洞科技 | Copyright © 2023-present</span>',
  },
  logo: false,
  links: [{ href: '/reset.css', rel: 'stylesheet' }],
  resolve: {
    docDirs: [
      { type: 'blog', dir: 'docs/blog' },
      { type: 'changelog', dir: 'docs/changelog' },
    ],
    atomDirs: [
      { type: 'guide', dir: 'src/coms' },
      { type: 'guide', dir: 'src/utils' },
      { type: 'guide', dir: 'src/hook' },
    ],
    codeBlockMode: 'passive',
  },
});
