import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logo}><div>&nbsp;</div></div>
        <h1>Something Real</h1>
      </main>
    </div>
  );
}
