import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head'
import { Header, About, Features } from '../app/components';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {

  return (
    <div >
      <Head>
        <title>Mina Yaghoubi kia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <About/>
      <Features/>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common", "header", "about"])),
      // Will be passed to the page component as props
    },
  };
}
