const map = {
    'build:aliyun': '/',
    'build:github': '/blog/'
}
module.exports = {
    base: map[process.env.npm_lifecycle_event] || '/',  // 设置站点根路径
    title: "蒋张祥的博客",
    // description: "项目表述",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        editLinks: true,
        editLinkText: "在 GitHub 上编辑此页 ！",
        repo: 'jiangzhangxiang/blog',
        docsDir: 'docs',
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        lastUpdated: "上次更新",
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: "更新",
            },
        }
    },

};
