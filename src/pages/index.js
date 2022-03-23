import Title from "./components/title/Title";
import Socialmedia from "./components/socialmedia/Socialmedia";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>Pekka Laaksonen</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/proxima-nova/fonts.min.css"
        />
      </Head>
      <div className="container">
        <Title />
        <Socialmedia />
      </div>
    </>
  );
}
