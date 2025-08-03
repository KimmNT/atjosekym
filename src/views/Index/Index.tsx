import Navbar from "../../components/Navbar/Navbar";
import styles from "./Index.module.scss";

export default function Index() {
  return (
    <>
      <Navbar />
      <main className={styles.Page}>
        <section className={styles.PageContent}>
          <h1>Hi, I'm Jose Kim</h1>
        </section>
      </main>
    </>
  );
}
