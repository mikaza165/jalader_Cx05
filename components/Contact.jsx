import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <div className="crumbs">
        <div className="f-content">
          <Link href="/">首页</Link>
          <div className="current">客户服务</div>
        </div>
      </div>
      <div id="verb-container" className="verb-more">
        <div className="mask-w mask-contact clearfix">
          <h3>
            <span><i>联</i>
            </span>
            <span><i>系</i>
            </span>
            <span><i>我</i>
            </span>
            <span><i>们</i>
            </span>
            <span><i></i>
            </span>
            <span><i></i>
            </span>
          </h3>
          <div className="mask-contact-tr" ></div>
          <div className="col-co-list">
            <div className="col-co">
              <dt>在线服务与支持：</dt>
              <dd>jalader.com</dd>
            </div>
            <div className="col-co">
              <dt>销售及支持：</dt>
              <dd>jiyuxiangsu@163.com</dd>
              <dd>267005274@qq.com</dd>
            </div>
            <div className="col-co">
              <dt>联系电话：</dt>
              <dd>187-0528-5328</dd>
              <dd>187-0528-8568</dd>
              <dd>187-2160-3344</dd>
            </div>
            <div className="col-co">
              <dt>办公地址：</dt>
              <dd>江苏镇江扬中扬子中路180号</dd>
              <dd>邮编：212200</dd>
            </div>
            <div className="col-co">
              <dt>工厂地址：</dt>
              <dd>江苏镇江扬中油坊先锋科技园666号</dd>
              <dd>邮编：212219</dd>
            </div>
            <div className="col-co">
              <dt>微信：</dt>
              <dd className="co-img">
                <p>嘉利德销售一部</p>
                <img src={`assets/images/wechat2.png`} alt="" />
                <p>嘉利德销售二部</p>
                <img src={`assets/images/wechat.png`} alt="" />

              </dd>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact