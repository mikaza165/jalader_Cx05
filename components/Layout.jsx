import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Waves from './Waves';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Jalder 嘉利德管业 - 官方网站</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <culture>
        <Waves />
      </culture>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout