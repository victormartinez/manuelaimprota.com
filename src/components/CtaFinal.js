import * as React from "react"

import monograma from "../images/monograma.png"
import {
  waLink,
  MSG_AGENDAR,
  WhatsAppIcon,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "./whatsapp"

const CtaFinal = () => (
  <section className="s-cta" id="contato">
    <div className="container container-estreito cta-final">
      <img
        className="cta-monograma reveal"
        src={monograma}
        alt=""
        width="512"
        height="425"
      />
      <h2 className="reveal">
        O primeiro passo pode ser <em>hoje</em>.
      </h2>
      <p className="reveal">
        Se algo aqui fez sentido, me chama. A primeira conversa é pra se
        conhecer, tirar dúvidas e entender se faz sentido caminharmos juntas —
        sem pressa.
      </p>
      <div className="hero-ctas cta-centro reveal">
        <a
          className="btn btn-primario"
          href={waLink(MSG_AGENDAR)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Quero agendar uma conversa
        </a>
        <a
          className="btn btn-fantasma"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          me acompanha no <strong>{INSTAGRAM_HANDLE}</strong>
        </a>
      </div>
    </div>
  </section>
)

export default CtaFinal
