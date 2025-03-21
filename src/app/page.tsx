export const runtime = "edge";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Home Page</h1>

        <div className={styles.ctas}>
          <Link href="/about">Got To About Page</Link>
        </div>
      </main>
    </div>
  );
}
