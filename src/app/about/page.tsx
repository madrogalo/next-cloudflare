export const runtime = "edge";

import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function About() {
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
        <h1>About</h1>

        <div className={styles.ctas}>
          <Link href="/">Got To Home Page</Link>
        </div>
      </main>
    </div>
  );
}
