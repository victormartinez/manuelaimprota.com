import * as React from "react"

function Seo({
  title,
  description,
  keywords,
  siteUrl,
  pathname = "/",
  noindex = false,
  structuredData = [],
}) {
  const url = `${siteUrl}${pathname}`
  const ogImage = `${siteUrl}/og-image.jpg`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Manuela Improta" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/Fraunces-Variable.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/DMSans-Variable.woff2"
        crossOrigin="anonymous"
      />

      {structuredData.map((schema, i) => (
        <script
          key={`ld-json-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export default Seo
