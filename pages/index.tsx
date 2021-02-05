import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Login from "./login";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/login">
        <a>login</a>
      </Link>
    </div>
  );
}
