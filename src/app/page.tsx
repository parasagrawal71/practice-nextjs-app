import Image from "next/image";
import styles from "./page.module.css";
import Greet from "./components/greet";
import Counter from "./components/counter";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Greet />

        <Counter />
      </main>
    </div>
  );
}
