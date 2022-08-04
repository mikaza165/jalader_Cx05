import React from 'react'
import Link from 'next/link'

const Customerservice = () => {
  return (
    <>
      <div className="crumbs">
        <div className="f-content">
          <Link href="/">首页</Link>
          <div className="current">客户服务</div>
        </div>
      </div>
      <div className="page-main">
        <div className="f-content">
          <div className="page-content">
            <div className="box">
              <h4>客户服务</h4>
              <div className="box_txt clearfix">
                <p>嘉利德客户服务部依托先进的技术，通过建设多元化特色渠道，集中化解决用户问题，传递用户心声，助力产品使用体验。我们有专业的服务团队，不仅通过线上对话、电话、微信等服务渠道，为我们用户提供优质服务，还通过嘉利德响应一站式现场服务，7*24h 专注为客户解决实际需求，减少客户成本，合作共赢。</p>
                <p></p>
                <p>客服专线</p>
                <div className="ul-3">
                  <div className="li">
                    <div className="left icon">
                      <span></span>
                    </div>
                    <div className="txt">嘉利德服务专线：0511-88536568</div>
                    <div className="both"></div>
                  </div>
                  <div className="li">
                    <div className="left icon">
                      <span></span>
                    </div>
                    <div className="txt">售后专线：0511-88536568</div>
                    <div className="both"></div>
                  </div>
                  <div className="li">
                    <div className="left icon">
                      <span></span>
                    </div>
                    <div className="txt">施工抢修专线：0511-88536568</div>
                    <div className="both"></div>
                  </div>
                  <div className="li">
                    <div className="left icon">
                      <span></span>
                    </div>
                    <div className="txt">技术支持QQ：441447860</div>
                    <div className="both"></div>
                  </div>
                  <p>更多产品问题请登录嘉利德网站http://jalader.com寻求帮助，或扫描以下二维码关注嘉利德客服微信公众号获取帮助</p>
                  <p>嘉利德客服公众号</p>
                  <img className="code-img" src="assets/images/wechat2.png" alt="" />
                  <p>嘉利德工程部</p>
                  <img className="code-img" src="assets/images/wechat.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customerservice