import * as React from "react"
import { Link } from "gatsby"

import "../styles/global.css"

const NotFoundPage = () => (
  <main
    style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
    }}
  >
    <p className="kicker">Página não encontrada</p>
    <h1 style={{ marginBottom: "1.2rem" }}>
      Essa página não <em>existe</em>.
    </h1>
    <p style={{ maxWidth: "32em", color: "var(--espresso-suave)" }}>
      O endereço pode ter mudado. O que você procura provavelmente está na
      página inicial.
    </p>
    <Link className="btn btn-primario" to="/" style={{ marginTop: "2rem" }}>
      Voltar ao início
    </Link>
  </main>
)

export default NotFoundPage

export const Head = () => (
  <>
    <title>Página não encontrada · Manuela Improta</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </>
)
