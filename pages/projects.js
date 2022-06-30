import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import climapp from "../public/Img/proyect/climApp.jpg";
import gimmearide from "../public/Img/proyect/gimmearide.jpg";
import pronto from "../public/Img/proyect/muypronto.jpg";

const projects = () => (
  <Layout>
    <main>
      <div className="container">
        <div className="card">
          <div>
            <Image src={climapp} alt="ClimApp" width={300} height={200} />
          </div>
          <div>
            <h1>ClimApp</h1>
            <Link href="https://clim-app-spa.vercel.app/">
              <a target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
            </Link>
          </div>
        </div>
        <div className="card">
          <Image src={pronto} alt="Gimme a Ride" width={300} height={200} />
        </div>

        <div className="card">
          <Image src={pronto} alt="ClimApp" width={300} height={200} />
        </div>
        <div className="card">
          <Image src={gimmearide} alt="Gimme a Ride" width={300} height={200} />
        </div>
      </div>
    </main>

    <style jsx>{`
      /* main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100vw;
        height: 100vh;
        background-color: #242424;
        background-size: cover;
        color: white;
        text-align: center;
      }
      .container {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;

        width: 80%;
        border: 1px solid #ffc927;
      }
      .card {
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ffc927;
      } */
    `}</style>
  </Layout>
);

export default projects;
