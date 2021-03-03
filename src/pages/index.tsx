import Link from "next/link";
import { useEffect, useState } from "react";

import type { GetStaticProps } from "next";

export default function Home({ test: defaultTest }: { test: string }) {
  const [test, setTest] = useState(defaultTest);

  useEffect(() => {
    setTest("client side only!");
  }, []);

  return <div>{test}</div>;
}

// export const getStaticProps: GetStaticProps = async () => {
//   // SSR時にしか呼ばれない
//   // getServerSidePropsとは併用できない
//   return {
//     props: {
//       test: true
//     },
//   };
// };

export const getServerSideProps: GetStaticProps = async () => {
  // SSR時にしか呼ばれない
  return {
    props: {
      test: "server side only!",
    },
  };
};
