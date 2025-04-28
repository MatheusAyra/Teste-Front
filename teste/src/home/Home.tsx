import { useRef, useState } from "react";
import "./Home.css";

const itens = [
  {
    id: 1,
    titulo: "Conexão com o mercado de trabalho",
    conteudo:
      "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais.",
  },
  {
    id: 2,
    titulo: "Aprendizado imersivo",
    conteudo:
      "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica. Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira.",
  },
  {
    id: 3,
    titulo: "Ensino personalizado",
    conteudo:
      "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor.",
  },
  {
    id: 4,
    titulo: "Inovação e transformação",
    conteudo:
      "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia.",
  },
];

export function Home() {
  const proxSessao = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleScrollDown = () => {
    proxSessao.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenModal = (src: string) => {
    setSelectedImage(src);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedImage("");
  };

  const handleAccordion = (index: number) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <header>
        <img width="100px" src="/assets/logo-fiap.png" alt="logo fiap" />
      </header>

      <section className="sessao-inicial">
        <div>
          <h1 className="titulo">A MAIOR FACULDADE</h1>
          <h1 className="sub-titulo">DE TECNOLOGIA</h1>
          <p className="paragrafo">
            Referência em tecnologia e inovação no Brasil, a FIAP é uma
            faculdade que prepara profissionais para o futuro, com um ensino
            prático, professores atuante no mercado e desafios reais que
            conectam os alunos as grandes empresas.
          </p>
        </div>

        <div className="scroll-down">
          <p>SCROLL DOWN</p>
          <img
            onClick={handleScrollDown}
            width="40px"
            src="/assets/icone-seta.svg"
            alt="Botão de seta para abaixo"
          />
        </div>
      </section>

      <section ref={proxSessao} className="educacao-tech">
        <h1>EDUCAÇÃO E TECH</h1>
        <div className="content">
          <div className="container">
            <div>
              <p>
                A FIAP é muito mais do que uma faculdade de tecnologia, é um
                verdadeiro ecossistema de inovação e aprendizado. Conhecida por
                sua abordagem moderna e focada no mercado, a instuição é
                referência quando se trata de formar profissionais capacitados
                para os desafios do futuro. Seja na graduação, pós graduação ou
                cursos livres, a FIAP entrega um ensino que mistura teoria e
                prática, preparando os alunos para atuar em empresas de ponta ou
                até mesmo empreender.
              </p>

              <img
                src="assets/imagem-fiap.jpg"
                alt="Imagem da Fiap X Next"
                className="imagem-fiap"
                onClick={() => handleOpenModal("assets/imagem-fiap.jpg")}
              />

          
              {isOpenModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                  <img
                    className="imagem-modal"
                    src={selectedImage}
                    alt="Imagem da Fiap X Next"
                    onClick={() => handleOpenModal("assets/imagem-fiap.jpg")}
                  />

                  <img
                    className="icone-fechar"
                    src="assets/icone-fechar.svg"
                    alt="Ícone de fechar"
                  />
                </div>
              )}
            </div>

            <div className="conteudo-fiap">
              <p>
                Com um corpo docente formado por profissionais atuantes no
                mercado, a FIAP não ensina apenas tecnologia, mas também
                negócios, inovação e liderança. Seus cursos abrangem diversas
                áreas, incluindo:
              </p>
              <h5>
                <i>/</i> Tecnologia e Desenvolvimento
              </h5>
              <h6>
                <b>-</b> Desenvolvimento de Software
              </h6>
              <h6>
                <b>-</b> Inteligência Artificial
              </h6>
              <h6>
                <b>-</b> Data Science
              </h6>
              <h6>
                <b>-</b> Cibersegurança
              </h6>

              <h5>
                <i>/</i> UX/UI, Marketing Digital
              </h5>
              <h5>
                <i>/</i> Metodologias e Gestão
              </h5>
              <p>
                Além disso, a instuição incentiva fortemente o uso dessas
                metodologias e outras abordagens inovadoras que fazem parte do
                dia a dia de grandes empresas.
              </p>
            </div>
          </div>
        </div>

        <img
          className="seta-de-baixo"
          onClick={handleScrollUp}
          width="40px"
          src="assets/icone-seta-acima.svg"
          alt="Botão de seta para cima"
        />
      </section>

      <section className="paralax"></section>

      <section className="nossa-estrutura">
        <h1>Nossa estrutura</h1>
        <div className="container">
          <hr />
          {itens.map((item, index) => (
            <div
              key={item.id}
              className={`accordion-item ${isOpen === index ? "active" : ""}`}
            >
              <div className="accordion-header">
                <h3>{item.titulo}</h3>
                {isOpen == index ? (
                  <img
                    className="accordion-open"
                    src="assets/icone-de-menos.svg"
                    width={30}
                    onClick={() => handleAccordion(index)}
                  />
                ) : (
                  <img
                    className="accordion-open"
                    src="assets/icone-de-mais.svg"
                    width={30}
                    onClick={() => handleAccordion(index)}
                  />
                )}
              </div>
              <div className="accordion-conteudo">
                <p>{item.conteudo}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </section>

      <section className="saiba-mais">
        <h1>Quer saber mais?</h1>
        <button>Entre em contato</button>
      </section>
    </div>
  );
}