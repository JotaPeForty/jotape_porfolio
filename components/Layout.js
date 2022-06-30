import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head></Head>
      <Navbar />

    <div className="main">{children}</div>

    <style jsx>{`
      div {
        display: flex;
        height: 100vh;
        width: 100vw;
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
      }
      a {
        text-decoration: none;
        list-style-type: none;
      }
      .main {
        display: flex;
        justify-content: center;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Layout;
