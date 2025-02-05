import Image from "next/image";
import styles from "./page.module.css";
import HomeWork from "./components/HomeWork";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Next js app</h1>
      <HomeWork/>
    </div>
  );
}
