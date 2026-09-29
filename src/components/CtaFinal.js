import * as React from "react"

import monograma from "../images/monograma.png"
import { whatsAppProps, WhatsAppIcon } from "./whatsapp"

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
        <a className="btn btn-primario" {...whatsAppProps("agendar-rodape")}>
          <WhatsAppIcon />
          Vamos conversar
        </a>
      </div>
    </div>
  </section>
)

export default CtaFinal
