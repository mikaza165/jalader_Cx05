import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

import Head from 'next/head';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, ruler, params1, params2, params3, params4, params5, params6, application, application1, application2, size, size1 } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <>
      <Head>
        <title>{name} - Jalder 嘉利德管业</title>
      </Head>
      <div className="with-tr">
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <div className="physical-imgae">
                <img src={urlFor(image && image[index])} className="product-detail-image" />
              </div>
            </div>
            <div className="small-images-container">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (60)
              </p>
            </div>
            <h4>品名: </h4>
            <p>嘉利德 <sup>®</sup> {name}</p>
            <p>执行标准：
              {ruler}</p>
            <h4>注意: </h4>
            <p>由于灯光或显示器的颜色偏差，实际颜色可能会略有不同，并且因生产工艺及模具等造成每个配件颜色、尺寸也会略有差异，因此请务必在订购前进行核实确认。</p>
            <p className="price">¥ {price}</p>
            <div className="quantity">
              <h3>数量:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
              </p>
            </div>

            <div className="buttons">
              <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>收 藏</button>
              <button type="button" className="buy-now" onClick={handleBuyNow}>采 购</button>
            </div>
          </div>
        </div>

        <div className='description'>
          <div className="chart">

            <div className="div-h4">
              <div className="x-product-detail">
                <div>
                  <ul>
                    <li>
                      <h3>
                        <span>产品信息</span>
                      </h3>
                      <div className="rc-pdsection-panel">
                        <div className="rc-pdsection-panel-left">
                          <h5 className="rc-pdsection-title">概述</h5>
                        </div>
                        <div className="rc-pdsection-panel-right">
                          <div className="para-list">
                            <p>嘉利德 <sup>®</sup> {details} </p>
                          </div>
                        </div>
                        <div className="rc-pdsection-panel-left">
                          <h5 className="rc-pdsection-title">技术规格</h5>
                        </div>
                        <div className="rc-pdsection-panel-right">
                          <div className="para-list">
                            <p>
                              {size}
                            </p>
                            <div className="lastparalist">
                              <p>{size1}</p>
                            </div>
                            <div className="lastparalist">
                              <h5 className="h5-para-title">执行标准：</h5>
                            </div>
                            <p>{ruler}</p>
                            <div className="lastparalist">
                              <h5 className="h5-para-title">技术参数：</h5>
                            </div>
                            <p>{params1}</p>
                            <p>{params2}</p>
                            <p>{params3}</p>
                            <p>{params4}</p>
                            <p>{params5}</p>
                            <p>{params6}</p>
                          </div>
                        </div>

                        <div className="rc-pdsection-panel-left">
                          <h5 className="rc-pdsection-title">应用领域</h5>
                        </div>
                        <div className="rc-pdsection-panel-right rc-pdsection-panel-right-last">
                          <div className="para-list">
                            <p>{application}</p>
                            <p>{application1}</p>
                            <p>{application2}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="maylike-products-wrapper">
          <h2>产品推荐</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </div>

        <div className='mark-pen'>
          <div className="div-h4">
            <img src={`/assets/images/wechattattle.png`}
              width={1440}
              alt="" />
          </div>
        </div>
      </div >
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  // console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails