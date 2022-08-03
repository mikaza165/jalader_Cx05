import React, { useEffect, useState } from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner} from '../components';
import product from '../sanity_ecommerce/schemas/product';

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>热销产品</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container with-tr">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[1]} />

    <div className="products-clients">
      <div className="products-heading">
        <h2>服务领域</h2>
      </div>
      <div className="clients-container">
        <div className="clients-group">
          <div className="clients-item hoopsai">
            <img src={`../assets/images/sewing-3405975_960_720-1.jpg`} alt="" />
          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item agoda">
            <img src={`../assets/images/sewing-3405975_960_720-2.jpg`} alt="" />

          </div>
          <div className="clients-item getsafe">
            <img src={`../assets/images/sewing-3405975_960_720-3.jpg`} alt="" />

          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item grab">
            <img src={`../assets/images/sewing-3405975_960_720-4.jpg`} alt="" />

          </div>
          <div className="clients-item crsp">
            <img src={`../assets/images/sewing-3405975_960_720-6.jpg`} alt="" />

          </div>
          <div className="clients-item anyleads">
            <img src={`../assets/images/sewing-3405975_960_720-7.jpg`} alt="" />

          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item teachable">
            <img src={`../assets/images/sewing-3405975_960_720-5.jpg`} alt="" />

          </div>
          <div className="clients-item flyr">
            <img src={`../assets/images/sewing-3405975_960_720-8.jpg`} alt="" />

          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item roger">
            <img src={`../assets/images/sewing-3405975_960_720-9.jpg`} alt="" />
          </div>
        </div>
      </div>
    </div >
    
  </>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, }
  }
}

export default Home;