import ejs from 'ejs';
import fs from 'fs';
import markdownIt from 'markdown-it';
import markdownItAttrs from '@gerhobbelt/markdown-it-attrs';

const md = markdownIt({ html: true });

md.use(markdownItAttrs, {
    allowedAttributes: []
});

const PUBLIC_DIR = 'public';
const TEMPLATE_DIR = '_templates';
const PAGES_DIR = '_pages';


const MAIN_TEMPLATE_STR = fs.readFileSync(`${TEMPLATE_DIR}/main.html.ejs`).toString();
const MAIN_TEMPLATE = ejs.compile(MAIN_TEMPLATE_STR);

function renderPage(pageName) {
    const pageMarkdown = fs.readFileSync(`${PAGES_DIR}/${pageName}.md`).toString();

    const pageContent = md.render(pageMarkdown);

    const pageData = {
        name: pageName,
        content: pageContent,
        contentClass: 'is-medium',
    };

    if (/patterns-(.*)/.test(pageName)) {
        pageData.contentClass = 'is-normal';
    } else if (/(.*)-prayer/.test(pageName)) {
        pageData.contentClass = 'is-large';
    }

    const pageRendered = MAIN_TEMPLATE({
        page: pageData
    });

    fs.writeFileSync(`${PUBLIC_DIR}/${pageName}.html`, pageRendered);
}

for (let page of fs.readdirSync(PAGES_DIR)) {
    renderPage(page.replace('.md', ''));
}