import * as React from "react"

import logoHorizontal from "../images/logo-horizontal.png"
import { waLink, MSG_AGENDAR, reportWhatsAppConversion } from "./whatsapp"

const TopBar = () => {
  const [rolou, setRolou] = React.useState(false)

  React.useEffect(() => {
    const atualizar = () => setRolou(window.scrollY > 8)
    window.addEventListener("scroll", atualizar, { passive: true })
    atualizar()
    return () => window.removeEventListener("scroll", atualizar)
  }, [])

  return (
    <header className={`topo${rolou ? " rolou" : ""}`}>
      <div className="topo-inner">
        <a className="topo-logo" href="#inicio">
          <img
            src={logoHorizontal}
            alt="Manuela Improta — Psicóloga Perinatal & Feminina"
            width="1037"
            height="162"
          />
        </a>
        <nav className="topo-nav" aria-label="Navegação principal">
          <a href="#pra-voce">Pra você</a>
          <a href="#sobre">Sobre</a>
          <a href="#atendimento">Atendimento</a>
          <a href="#perguntas">Perguntas</a>
          <a href="#guias">Guias</a>
        </nav>
        <a
          className="btn btn-primario btn-topo"
          href={waLink(MSG_AGENDAR)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={reportWhatsAppConversion}
        >
          Agendar conversa
        </a>
      </div>
    </header>
  )
}

export default TopBar
