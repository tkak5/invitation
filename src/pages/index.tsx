import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { Invitation } from "@features/invitation/";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Invitation />
    </>
  );
}
