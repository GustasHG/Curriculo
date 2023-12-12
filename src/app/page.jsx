import { Phone, Mail, MapPinned } from 'lucide-react';
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <section
        id="name-section"
        className={styles.nameSection}
      >
        <h1 className={styles.name}>Gustavo Henrique Gonçalves</h1>
      </section>
      <section
        id="photo-section"
        className={styles.photoSection}
      >
        <div
          id="image-container"
          className={styles.imageContainer}
        >
          <Image
            className={styles.photo}   
            height={200}
            src="/photo.jpg"
            width={200}
          />
        </div>

        <div
          id="about-me"
          style={{ margin: "0 auto", width: "60%" }}
        >
          <h1 className={styles.title}>
            Engenheiro Mecânico
          </h1>
          <p
            style={{ marginTop: "5px" }}
          >
            Estudante de Engenharia Mecânica no quarto ano, entusiasta do desenvolvimento de software, com um ano de estágio e foco em aprendizado contínuo. Comprometido, proativo e ávido por novos desafios e conhecimentos na área.
          </p>
        </div>
      </section>

      <section
        id="education"
        className={styles.educationSection}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className={styles.educationContainer}
          >
            <h1
              className={styles.title}
              style={{ fontSize: "20px", marginTop: "15px" }}  
            >
              Línguas
            </h1>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              Português - Nativo <br/>
              Inglês - Avançado
            </p>
          </div>
          
          <div
            className={styles.educationContainer}
            style={{ marginTop: "20px" }}
          >
            <h1
              className={styles.title}
              style={{ fontSize: "20px", marginTop: "15px" }}  
            >
              Educação
            </h1>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              Unesp Engenharia Mecânica Guaratinguetá, São Paulo <br/>
              Ano de Início: 2020 - Presente
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className={styles.experienceSection}
      >
        <div
          style={{ margin: "0 auto", marginTop: "100px", width: "60%" }}
        >
          <h1
            className={styles.title}
            style={{ color: "#fff", marginTop: "15px" }}  
          >
            Experiência
          </h1>

          <h1
            className={styles.title}
            style={{ color: "#fff", fontSize: "18px", marginTop: "5px" }}  
          >
            Analista Estrutural - Estagiário Cemef<br></br> Fevereiro-2023 - Presente
          </h1>
          <p
            style={{ color: "#fff", marginTop: "5px" }}
          >
          Como estagiário na Cemef, venho contribuindo para o avanço da análise
              estrutural por meio do método dos elementos finitos. Ao longo do último
              ano, tive a oportunidade de imergir no universo desafiador e inovador da
              engenharia, desempenhando um papel fundamental na equipe de análise
              estrutural.
          </p>

          <h1
            className={styles.title}
            style={{ color: "#fff", marginTop: "50px" }}  
          >
            Habilidades e Interesses
          </h1>
          <p
            style={{ color: "#fff", marginBottom: "60px", marginTop: "5px" }}  
          >
            Conhecimento de programaçao na linguagem JAVA e C  <br/>
            Interesse em Next.js, JavaScript, CSSe HTML <br/>
            Conhecimento avançado em Femap <br/>
            Conhecimento intermediario de Autocad <br/>
            Conhecimento intermediario do pacote Office <br/>
          </p>
        </div>
      </section>

      <section
        className={styles.media}
      >
        <ul className={styles.ulMedia}>
          <li className={styles.ilistc}>
            <Phone className={styles.icon} />
            <p className={styles.paragraph}> (12) 97411-7459 </p>
          </li>

          <li className={styles.ilistc}>
            <Mail className={styles.icon} />
            <p className={styles.paragraph}> gh.goncalves01@gmail.com </p>
          </li>

          <li className={styles.ilistc}>
            <MapPinned className={styles.icon} />
            <p className={styles.paragraph}>Avenida Juscelino Kubitschek, 5460</p>
          </li>

        </ul>
      </section>


      {/* <section className={styles.section1}> */}

        

        {/* <h1> Gustavo Henrique <br /> Gonçalves</h1>

        <ul className={styles.ulist}>
          <li className={styles.ilist}>
            <h4 className={styles.title4}> Engenheiro Mecânico</h4>
            <p className={styles.paragraph}>Estudante de Engenharia Mecânica no quarto ano, entusiasta do desenvolvimento de software, com um ano de estágio e foco em aprendizado contínuo. Comprometido, proativo e ávido por novos desafios e conhecimentos na área.</p>
          </li>

          <li className={styles.ilist}>
            <h4 className={styles.title4}> Educação</h4>
            <p className={styles.paragraph}>Unesp</p>
            <p className={styles.paragraph}>Engenharia Mecânica</p>
            <p className={styles.paragraph}>Guaratinguetá, São Paulo</p>
            <p className={styles.paragraph}>Ano de Início: 2020 - Presente</p>
          </li>

          <li className={styles.ilist}>
            <h4 className={styles.title4}>Línguas</h4>
            <p className={styles.paragraph}>Português</p>
            <p className={styles.paragraph}>Inglês Avançado</p>
          </li>

        </ul>

        

      </section>

      <section className={styles.section2}>
        <div>
        <ul >
          <li>
            <h3 className={styles.separator}> EXPERIÊNCIA </h3>

            <h4 className={styles.title3}> Analista Estrutural - Estagiário Cemef<br></br> Fevereiro-2023 - Presente </h4>
            
            <p className={styles.margin}>Como estagiário na Cemef, venho contribuindo para o avanço da análise
              estrutural por meio do método dos elementos finitos. Ao longo do último
              ano, tive a oportunidade de imergir no universo desafiador e inovador da
              engenharia, desempenhando um papel fundamental na equipe de análise
              estrutural.
            </p>
          </li>
          </ul>
          </div>
          <div>

          

          <ul className={styles.bulletlist}>

          <li>
            <h3 className={styles.separator}> HABILIDADES E INTERESSES    </h3>
          </li>
          <li className={styles.margin}>Conhecimento de programaçao na linguagem JAVA e C </li>
          <li className={styles.margin}>Interesse em Next.js, JavaScript, CSSe HTML</li>
          <li className={styles.margin}>Conhecimento avançado em Femap</li>
          <li className={styles.margin}>Conhecimento intermediario de Autocad</li>
          <li className={styles.margin}>Conhecimento intermediario do pacote Office</li>
        </ul>
        </div>
      </section> */}

    </main>
  );
}
