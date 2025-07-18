import { type DefaultTheme } from 'vitepress'

// 作者: zeMing
const uniapp: DefaultTheme.SidebarItem = {
  text: 'uniapp',
  collapsed: false,
  base: '/VPContent/uniapp',
  items: [
    { text: '概述', link: '/' },
    { text: 'uniapp项目初始化', link: '/cli' },
    { text: 'npm获取命令行参数', link: '/get-params' },
    { text: '生成canvas进行电子签名', link: '/electronic-signature' },
    { text: '微信小程序获取当前位置', link: '/get-location' },
    { text: '文件的下载保存', link: '/save-path' },
    { text: 'webView拓展使用', link: '/web-view' },
    { text: '刻度进度仪表盘', link: '/gauge' },
    { text: '支付宝', link: '/alipay' },
  ],
}

export default uniapp
