import * as React from "react"

const Abordagem = () => (
  <section className="s-abordagem" id="abordagem">
    <div className="container">
      <p className="kicker reveal">O que você encontra aqui</p>
      <h2 className="reveal">
        Um cuidado com <em>base</em> — e com colo.
      </h2>
      <ul className="pilares">
        <li className="pilar reveal">
          <svg className="icone-pilar" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
          </svg>
          <h3>Acolhimento antes de orientação</h3>
          <p>
            Primeiro a gente valida o que você sente. Depois, juntas, a gente
            entende o que fazer com isso.
          </p>
        </li>
        <li className="pilar reveal">
          <svg className="icone-pilar" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 7v14" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
          </svg>
          <h3>Base científica, linguagem de amiga</h3>
          <p>
            Psicologia analítica (junguiana) e evidência — traduzidas em
            conversa de gente, sem jargão.
          </p>
        </li>
        <li className="pilar reveal">
          <svg className="icone-pilar" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
          <h3>Sem julgamento, sem “jeito certo”</h3>
          <p>
            Não existe manual de maternidade. Existe o que funciona pra você e
            pra sua família.
          </p>
        </li>
        <li className="pilar reveal">
          <svg className="icone-pilar" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
          </svg>
          <h3>No seu ritmo</h3>
          <p>
            Terapia não é corrida. Cada processo tem seu tempo — e o seu tempo é
            respeitado.
          </p>
        </li>
      </ul>
    </div>
  </section>
)

export default Abordagem
