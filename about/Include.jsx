import React from 'react';
import { Header, Introduction, Wish, Contactus, Verb, Structure, Team } from '/about';
import Head from 'next/head';

export const Include = () => {
  return (
    <>
      <Head>
        <title>简介 - Jalder 嘉利德管业 </title>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Header />
      <Introduction />
      <Wish />
      <Team />
      <Structure />
      <Verb />
      <Contactus />
    </>
  )
}
export default Include
