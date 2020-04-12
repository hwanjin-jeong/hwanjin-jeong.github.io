const {resolve} = require('path')

const pages = [
    { id: 1, content: 'Gatsby 로 블로그 만들기' },
    { id: 2, content: '이짓을 왜 하는지 모르겠다' },
    { id: 3, content: '인생 힘드네' },
];

module.exports = async ({ actions: { createPage } }) => {
    pages.forEach(page => {
        createPage({
            path: page.id.toString(),
            context: page,
            component: resolve('./src/components/template/PostTemplate.tsx'),
        });
    });
}
