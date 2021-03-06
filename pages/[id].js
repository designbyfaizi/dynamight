import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const DynamicPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{router.query.id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Dynamic Page{" "}
        <a
          href="https://designbyfaizi.me"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0070f3" }}
        >
          in Next
        </a>
      </h1>
      <h2>Page URL:{"  "}{router.query.id}</h2>
      <div style={{minWidth: "100px", minHeight:"100px", background: router.query.id}}></div>
    </div>
  );
};

export default DynamicPage;
