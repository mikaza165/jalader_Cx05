import React from 'react';
import Head from 'next/head';
import Download from '../download/Download'

const downloads = () => {
  return (
    <>
      <Head>
        <title>下载中心 - Jalder 嘉利德管业</title>
      </Head>
      <>
        <Download />
      </>     
    </>
  )
}

export default downloads