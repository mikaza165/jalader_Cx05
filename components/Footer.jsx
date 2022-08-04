import React from 'react';
// import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__content">
        <div className="about_us">
          <h3 className="tit">关于我们</h3>
          <ul className="about_list">
            <Link href="/"><li>嘉利德管业部</li></Link>
            <Link href="/manages"><li>经营目录</li></Link>
            <Link href={{ pathname: '/bable', query: { name: 'u8425u4e1au6267u7167u526fu672c#' } }} ><li>营业许可</li></Link>
          </ul>
        </div>
        <div className="contact_us">
          <div className="it_area">
            <h3 className="tit"> 联系我们</h3>
            <ul className="contact_list">
              <Link href="/service"><li>客户服务</li></Link>
              <Link href="/partnership"><li>合作洽谈</li></Link>
              <Link href="/contact"><li>关注我们</li></Link>
            </ul>
          </div>
        </div>
        <div className="support_info">
          <h3 className="tit">帮助与支持</h3>
          <ul className="support_list">
            <Link href="/downloads"><li>产品说明书</li></Link>
            <Link href="/downloads"><li>产品标准</li></Link>
            <Link href="/downloads"><li>文档与下载</li></Link>
          </ul>
        </div>
        <div className="logo_jalader">
          <div className="footer__logo"><img src={`/assets/images/jia-icon.png`} alt="" /></div>
        </div>
      </div>

      <div className="footer__extra-Content">
        <p className='copyright-1'>本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（技术及参数、售后保障等商品信息除外）</p>
        <p className='copyright-2'>Copyright © 2014 - 2022 Jalader. All Rights Reserved. <i className="flag_m">嘉利德公司 版权所有</i></p>
        <p className="icons">
        </p>
      </div>
    </div>
  )
}

export default Footer