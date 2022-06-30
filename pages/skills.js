import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import html from "../public/Img/icons/html5.png";
import css from "../public/Img/icons/CSS3.png";
import js from "../public/Img/icons/JavaScript.png";
import react from "../public/Img/icons/reactjs.png";
import redux from "../public/Img/icons/Redux.png";
import node from "../public/Img/icons/Node.js.png";
import express from "../public/Img/icons/expressjs.png";
import postgres from "../public/Img/icons/psql.png";
import sequelize from "../public/Img/icons/sequelize.png";
import sass from "../public/Img/icons/sass.png";
import git from "../public/Img/icons/git.png";
import Scon from "../public/Img/icons/styled components.png";
import next from "../public/Img/icons/next-js.png";
import salesforce from "../public/Img/icons/salesforce-com-logo.png";

const skills = () => (
  <Layout>
    <main>
      <div className="marco_exter">
        <div className="marco_inter">
          <div className="container">
            <div className="lleno">
              <div>
                <Link href="https://html5.org/">
                  <a target="_blank" rel="noreferrer">
                    <Image src={html} alt="HTML5" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>HTML 5</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://developer.mozilla.org/es/docs/Web/CSS">
                  <a target="_blank" rel="noreferrer">
                    <Image src={css} alt="CSS" width={70} height={90} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>CSS 3</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <a target="_blank" rel="noreferrer">
                    <Image src={js} alt="Javascript" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>JavaScript</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://reactjs.org/">
                  <a target="_blank" rel="noreferrer">
                    <Image src={react} alt="ReactJS" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>ReactJS</h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://redux.js.org/">
                  <a target="_blank" rel="noreferrer">
                    <Image src={redux} alt="Redux" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>Redux</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://nodejs.org/en/">
                  <a target="_blank" rel="noreferrer">
                    <Image src={node} alt="NodeJS" width={100} height={80} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>NodeJS</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://expressjs.com/">
                  <a target="_blank" rel="noreferrer">
                    <Image
                      src={express}
                      alt="ExpressJS"
                      width={100}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <h5>ExpressJS</h5>
              </div>
            </div>
            <div className="vacio"></div>
          </div>
          <div className="container">
            <div className="lleno">
              <div>
                <Link href="https://www.postgresql.org/">
                  <a target="_blank" rel="noreferrer">
                    <Image
                      src={postgres}
                      alt="Postgresql"
                      width={100}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <h5>PostgreSQL</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://sequelize.org/">
                  <a target="_blank" rel="noreferrer">
                    <Image
                      src={sequelize}
                      alt="sequelize"
                      width={100}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <h5>Sequelize</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://git-scm.com/">
                  <a target="_blank" rel="noreferrer">
                    <Image src={sass} alt="git" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>Sass</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://git-scm.com/">
                  <a target="_blank" rel="noreferrer">
                    <Image src={git} alt="git" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>Git</h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://styled-components.com/">
                  <a target="_blank" rel="noreferrer">
                    <Image
                      src={Scon}
                      alt="Styled Components"
                      width={100}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <h5>Styled Components</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://nextjs.org/">
                  <a target="_blank" rel="noreferrer">
                    <Image src={next} alt="Next.js" width={100} height={50} />
                  </a>
                </Link>
              </div>
              <div>
                <h5>NextJS</h5>
              </div>
            </div>
            <div className="vacio"></div>
            <div className="lleno">
              <div>
                <Link href="https://git-scm.com/">
                  <a target="_blank" rel="noreferrer">
                    <Image
                      src={salesforce}
                      alt="Salesforce"
                      width={100}
                      height={80}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <h5>Salesforce - OmniStudio</h5>
              </div>
            </div>
            <div className="vacio"></div>
          </div>
        </div>
      </div>
    </main>

    <style jsx>{`
      main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        color: white;
        text-align: center;
        padding: 2rem;
      }
      .container {
        display: flex;
      }

      .marco_inter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding: 2rem;
        border: 4px solid #ffc927;
      }
      .marco_exter {
        padding: 0.5rem;
        border: 4px solid #ffc927;
      }

      .lleno {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background: #cdcdcd;
        width: 10rem;
        height: 10rem;
        border: 1px solid #ffc927;
        padding: 2rem;
        color: black;
        -webkit-box-shadow: 6px 7px 15px 3px #ffc927;
        box-shadow: 6px 7px 15px 3px #ffc927;
      }
      .vacio {
        width: 10rem;
        height: 10rem;
      }
    `}</style>
  </Layout>
);

export default skills;
