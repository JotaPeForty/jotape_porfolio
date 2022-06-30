import Layout from "../components/Layout";
import Image from "next/image";
import yo from "../public/Img/yo.png";

const about = () => (
  <Layout>
    <main>
      <div className="container">
        <div className="container_img">
          <Image src={yo} alt="juan pablo benavente" width={500} height={400} />
        </div>
        <div className="container_txt">
          <p>
            Hola, mi nombre es Juan Pablo, soy Desarrollador Full Stack y
            Fotógrafo. Después de pasar 14 años en una empresa, de los cuales
            los últimos 9 años fueron como supervisor, el cual me dio la
            experiencia de transformar un sector de la empresa y formar un
            equipo de trabajo excelente como así también el desafío diario de la
            resolución de problemas.
          </p>
          <p>
            {" "}
            Comencé aprendiendo lo básico de manejo de PC, luego reparación de
            pc y redes, ahí descubrí el diseño y aprendí de forma autodidacta
            algunas herramientas, hasta mi primer curso de diseño web (2009).
            Después curse la carrera de Técnico Superior en Fotografía, que me
            dio más herramientas y experiencia en diseño.
          </p>
          <p>
            {" "}
            Hoy ya teniendo los siguientes conocimientos JavaScript, React,
            Redux, NodeJs, Express, PostgreSQL y aún más lenguajes por seguir
            aprendiendo, es momento de poner mi experiencia junto a mis
            conocimientos a disposición de quien la requiera y comenzar una
            nueva etapa, logrando reunir todo lo aprendido con el fin de poder
            crecer como desarrollador, por eso estoy en búsqueda de ese grupo de
            trabajo que me brinde la oportunidad de demostrarle mis aptitudes y
            predisposición para llevar a cabo los objetivos propuestos
          </p>
        </div>
      </div>
    </main>

    <style jsx>{`
      main {
        color: white;
        text-align: center;
      }
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5rem;
        padding-right: 10rem;
      }
      p {
        padding: 0.5rem;
        width: 800px;
      }
      .container_txt {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        font-size: 24px;
      }

      .container_img {
        padding: 2rem;
        padding-right: 5rem;
      }
    `}</style>

  </Layout>
);

export default about;
