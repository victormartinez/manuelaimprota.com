const React = require("react")


/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `pt-br` })
  setHeadComponents([
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WPNHYC46JG"></script>,
    <script
        dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-WPNHYC46JG');
        `
        }}
        />,
  ])
}
