module.exports = {
  name: 'ahoney',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/ahoney/',
    },
  },
  site: {
    title: 'ahoney',
    logo: 'https://cn.vuejs.org/images/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'icon',
            title: 'icon',
          }
        ],
      },
    ],
  },
};
