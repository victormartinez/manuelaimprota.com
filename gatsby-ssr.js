const React = require("react")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setHtmlAttributes({ lang: `pt-BR` })
  setHeadComponents([
    // Progressive enhancement: o CSS de reveal/carrossel só ativa com JS presente
    <script
      key="js-class"
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.classList.add('js');`,
      }}
    />,
    <script
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N3V7MRMZ');`,
      }}
    />,
  ])
  setPreBodyComponents([
    <noscript
      key="gtm-noscript"
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N3V7MRMZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />,
  ])
}
