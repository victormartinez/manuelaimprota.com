import * as React from "react"

function Seo({ title, description, keywords, siteUrl }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="preload"
        as="font"
        type="font/ttf"
        href="/fonts/Fraunces-Variable.ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/ttf"
        href="/fonts/DMSans-Variable.ttf"
        crossOrigin="anonymous"
      />
    </>
  )
}

export default Seo
