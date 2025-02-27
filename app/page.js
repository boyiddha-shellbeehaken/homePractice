import Image from "next/image";
import styles from "./page.module.css";
import HomeWork from "./components/HomeWork";
import GetImage from "./components/GetImage";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Next js app</h1>
      <HomeWork/>
      <h1>Get Image</h1>

      <div>
        <GetImage/>
      </div>
    </div>
  );
}
