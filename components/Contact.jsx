import React from 'react'

const Contact = () => {
  return (    
    <>

    
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
          <p></p>
          <div className="col-co-list">
            <div className="col-co">
              <dt>在线服务与支持：</dt>
              <dd>zjjybyx.com</dd>
            </div>
            <div className="col-co">
              <dt>销售及支持：</dt>
              <dd>jiyuxiangsu@163.com</dd>
            </div>
            <div className="col-co">
              <dt>联系电话：</dt>
              <dd>0511-88291110</dd>
              <dd>18705285328</dd>
            </div>
            <div className="col-co">
              <dt>地址：</dt>
              <dd>镇江市扬中市油坊镇老郎村</dd>
              <dd>邮编：212200</dd>
            </div>
            <div className="col-co">
              <dt>微信：</dt>
              <dd className="co-img">
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