import Link from "next/Link";
import Image from "next/Image";
import logo from "../public/Img/Logo port-1.png";
const Navbar = () => (
  <div>
    <nav>
      <ol>
        <Image src={logo} alt="logo" />
      </ol>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <a>Contacts</a>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="container"></div>

    <style jsx>{`
      div{
        display: flex;
      }
      .container {
        background-color: #ffc927;
        border: 1px solid #ffc927;
        width: 5px;
        height: 100vh;
      }

      nav {
        border: 1px solid black;
        width: 10em;
        height: 100vh;
        background-color: #0a0a0a;
        color: white;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: space-between;
      }

      ol {
        padding: 2rem;
        text-align: center;
      }

      h1 {
        padding: 0.5rem;
      }

      ul {
        text-align: center;
        padding: 1rem;
        padding-bottom: 3rem;
      }

      li {
        padding: 0.5rem;
        padding-bottom: 2rem;
      }
      a {
        font-weight: bold;
        padding: 1rem;
        position: relative;
      }
        a:before {
          content: "";
          display: block;
          width: 0;
          height: 3px;
          background: #ffc927;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 0.3s;
        }
        a:after {
          content: "";
          display: block;
          width: 0;
          height: 3px;
          background: #ffc927;
          position: absolute;
          right: 0;
          top: 0;
          transition: all 0.3s;
        }
        a:hover{
          color: #ffc927;
        }
        a:hover:before,
        a:hover:after {
          width: 100%;
        }
    `}</style>
  </div>
);

export default Navbar;
