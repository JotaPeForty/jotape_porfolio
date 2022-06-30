import Layout from "../components/Layout";

const home = () => (
  <Layout>
    <main>
    <div></div>
      <div className="container">
        <div className="container_sh1">
          <h1>Hola</h1>
          <h1 className="sign">!</h1>
        </div>
        <div className="container_h1">
          <h1>Bienvenido a mi </h1>
          <h1 className="sign">PortFolio</h1>
        </div>
      </div>
    </main>

    <style jsx>{`
      main {
        display: flex;
        justify-content: center;
        color: white;
      }
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: stretch;
        text-align: center;
        padding: 2rem;
      }
      .sign {
        color: #ffc927;
      }
      .container_sh1 {
        display: flex;
        font-size: 8rem;
      }
      .container_h1 {
        display: row;
        font-size: 2rem;
      }
      h1{
        margin: 0;
      }
    `}</style>
  </Layout>
);

export default home;
