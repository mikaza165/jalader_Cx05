import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Download = () => {
  return (
    <>
      <div className="header-content">
        <section className="page-header-ctrl">
          <div className="header-content">
            <div className="page-header">
              <h2 className="page-header__title">下 载 中 心</h2>
              <div className="location">
                <ul>
                  <Link href="/">
                    <li className="depth current breadcrumb depthActive">首页</li>
                  </Link>
                  <span className="depth current breadcrumb depthActive">
                    服务与支持
                  </span>
                  <span className="depth current breadcrumb">
                    下载中心
                  </span>
                </ul>

              </div>
            </div>
          </div>
        </section>
        <div className="sub-st">
          <div className="company">
            <div className="handle">
              <div className="wrapper">
                <input type="radio" name='slider' className="down-tab" id="j-cx01" defaultChecked />
                <input type="radio" name='slider' className="down-tab" id="j-cx02" />
                <input type="radio" name='slider' className="down-tab" id="j-cx03" />
                <input type="radio" name='slider' className="down-tab" id="j-cx04" />
                <div className="main-left-nav">
                  <div className="search-bar">
                    <div className="search">下载中心</div>
                  </div>
                  <label htmlFor="j-cx01" className="J_beef_up">
                    <div className="nav-arrow">电子说明书</div>
                  </label>
                  <label htmlFor="j-cx02" className="J_beef_up">
                    <div className="nav-arrow">执行标准</div>
                  </label>
                  <label htmlFor="j-cx03" className="J_beef_up">
                    <div className="nav-arrow">技术文档</div>
                  </label>
                  <label htmlFor="j-cx04" className="J_beef_up">
                    <div className="nav-arrow">宣传册 - 嘉利德</div>
                  </label>
                  <div className="slider"></div>
                </div>
                <div className="main-content ">
                  <div className="has-hidden tab-j-ac">
                    <div className="item-head">
                      <div className="item-icon">
                        <img src={`assets/images/attach-svgrepo-com.svg`} alt="" className="item-icon-img" />
                      </div>
                      <div className="item-right">
                        <h2 className="item-title">电子说明书</h2>
                        <p className="item-description">全新上市，优质耐用。支持 PP管 PPH管 PVDF管 曝气系统技术 官方宣传册 （PP RPP PPH PVDF PTFE管 管件 阀门 板 棒 非标制品加工及销售）</p>
                      </div>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">文档与手册</h3>
                      <ul className="download-list">
                        <li className="download-list-items">
                          <span className="download-list-item-title">PP 系列 产品说明 应用 </span>
                          <span className="download-list-item-date">2022-07-30</span>
                          <div className="download-formats">
                            <a href="/assets/down/PP_User_Manual_v19_chs.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon">
                                  <img src={`assets/images/download-o-primary-old.svg`} alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">PP FRPP 行业基础 管道管件 </span>
                          <span className="download-list-item-date">2022-06-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/JLD_PP_User_Manual_v22_chs.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">PPH 管材管件 规格参数说明 </span>
                          <span className="download-list-item-date">2022-06-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/JLD_PPH_User_Manual_v22_chs.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">PVDF 管材管件 规格参数 </span>
                          <span className="download-list-item-date">2022-06-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/JLD_PVDF_User_Manual_v22_chs.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">PVC U 管材管件 规格参数 </span>
                          <span className="download-list-item-date">2022-06-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/JLD_PVCU_User_Manual_v19_chs.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">其他下载</h3>
                      <div className="item-head product-lite">
                        <div className="item-icon">
                          <img src={`assets/images/broken-link-chain-svgrepo-com.svg`} alt="" className="item-icon-img" />
                        </div>
                        <div className="item-right">
                          <h2 className="item-title">媒体下载</h2>
                          <p className="item-description-deep">更好下载体验，请使用如下途径下载文档，或联系客服微信服务。</p>
                        </div>
                      </div>
                      <div className="download-sections product-lite ant-sections">
                        <div className="download-section ant-section">
                          <div className="item-icon dot-icon">
                            <img src={`assets/images/cloud-download-svgrepo-com.svg`} alt="" className="item-icon-img" />
                          </div>
                          <button className="dot-btn">百度网盘下载</button>
                        </div>
                        <div className="download-section ant-section">
                          <div className="item-icon dot-icon-right">
                            <img src={`assets/images/wechat.png`} alt="" className="item-icon-img" />
                          </div></div>
                      </div>
                    </div>
                    <div className="support-detail"></div>
                  </div>
                  <div className="has-hidden tab-j-bc">
                    <div className="item-head">
                      <div className="item-icon">
                        <img src={`assets/images/content-svgrepo-com.svg`} alt="" className="item-icon-img" />
                      </div>
                      <div className="item-right">
                        <h2 className="item-title">执行标准</h2>
                        <p className="item-description">规矩诚设，不可欺以方圜。 </p>
                      </div>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">文档与手册</h3>
                      <ul className="download-list">
                        <li className="download-list-items">
                          <span className="download-list-item-title">HG 20539 - 92 行业标准 </span>
                          <span className="download-list-item-date">1993-01-18</span>
                          <div className="download-formats">
                            <a href="/assets/down/HG20539-1992.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon">
                                  <img src={`assets/images/download-o-primary-old.svg`} alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">GB-13019 1991 聚丙烯管材 外经和壁厚极限偏差 </span>
                          <span className="download-list-item-date">1991-07-03</span>
                          <div className="download-formats">
                            <a href="/assets/down/GB-13019-1991-聚丙烯(PP)管材-外经和壁厚极限偏差.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">管径 规格参数指标 （国标、美标、日标） </span>
                          <span className="download-list-item-date">2002-05-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/Jalader_User_OD_Size_Ruler.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">其他下载</h3>
                      <div className="item-head product-lite">
                        <div className="item-icon">
                          <img src={`assets/images/broken-link-chain-svgrepo-com.svg`} alt="" className="item-icon-img" />
                        </div>
                        <div className="item-right">
                          <h2 className="item-title">媒体下载</h2>
                          <p className="item-description-deep">更好下载体验，请使用如下途径下载文档，或联系客服微信服务。</p>
                        </div>
                      </div>
                      <div className="download-sections product-lite ant-sections">
                        <div className="download-section ant-section">
                          <div className="item-icon dot-icon">
                            <img src={`assets/images/cloud-download-svgrepo-com.svg`} alt="" className="item-icon-img" />
                          </div>
                          <button className="dot-btn">百度网盘下载</button>
                        </div>
                        <div className="download-section ant-section">
                          <div className="item-icon dot-icon-right">
                            <img src={`assets/images/wechat.png`} alt="" className="item-icon-img" />
                          </div></div>
                      </div>
                    </div>
                    <div className="support-detail"></div>
                  </div>
                  <div className="has-hidden tab-j-cc">
                    <div className="item-head">
                      <div className="item-icon">
                        <img src={`assets/images/text-svgrepo-com.svg`} alt="" className="item-icon-img" />
                      </div>
                      <div className="item-right">
                        <h2 className="item-title">技术文档</h2>
                        <p className="item-description">支持 PP管 PPH管 PVDF管 （PP RPP PPH PVDF PTFE管 管件 连接方案） 曝气系统技术</p>
                      </div>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">文档与手册</h3>
                      <ul className="download-list">
                        <li className="download-list-items">
                          <span className="download-list-item-title">塑胶 产品 焊接说明 （总纲）</span>
                          <span className="download-list-item-date">2021-08-10</span>
                          <div className="download-formats">
                            <a href="/assets/down/PP_User_weding.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon">
                                  <img src={`assets/images/download-o-primary-old.svg`} alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">管道系统 （施工连接） 对焊连接法 </span>
                          <span className="download-list-item-date">2020-08-16</span>
                          <div className="download-formats">
                            <a href="/assets/down/PP_User_weding_Part1.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">管道系统 （施工连接） 热熔承插连接法 </span>
                          <span className="download-list-item-date">2021-07-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/PP_User_weding_Part2.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">管道系统 （施工连接） 热风焊接操作手册</span>
                          <span className="download-list-item-date">2021-08-03</span>
                          <div className="download-formats">
                            <a href="/assets/down/PP_User_weding_Part3.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">管径规格 尺寸参照表</span>
                          <span className="download-list-item-date">2002-05-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/Jalader_User_OD_Size_Ruler.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">NORRES 曝气管技术方案</span>
                          <span className="download-list-item-date">2002-05-20</span>
                          <div className="download-formats">
                            <a href="/assets/down/NORRES.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">其他下载</h3>
                      <div className="item-head product-lite">
                        <div className="item-icon">
                          <img src={`assets/images/broken-link-chain-svgrepo-com.svg`} alt="" className="item-icon-img" />
                        </div>
                        <div className="item-right">
                          <h2 className="item-title">媒体下载</h2>
                          <p className="item-description-deep">更好下载体验，请使用如下途径下载文档，或联系客服微信服务。</p>
                        </div>
                      </div>
                      <div className="download-sections product-lite ant-sections">
                        <div className="download-section ant-section">
                          <div className="item-icon dot-icon">
                            <img src={`assets/images/cloud-download-svgrepo-com.svg`} alt="" className="item-icon-img" />
                          </div>
                          <button className="dot-btn">百度网盘下载</button>
                        </div>
                        <div className="download-section ant-section">
                          <div className="item-icon dot-icon-right">
                            <img src={`assets/images/wechat.png`} alt="" className="item-icon-img" />
                          </div></div>
                      </div>
                    </div>
                    <div className="support-detail"></div>
                  </div>
                  <div className="has-hidden tab-j-dc">
                    <div className="item-head">
                      <div className="item-icon">
                        <img src={`assets/images/chat-svgrepo-com.svg`} alt="" className="item-icon-img" />
                      </div>
                      <div className="item-right">
                        <h2 className="item-title">产品下载</h2>
                        <p className="item-description">PP管 PPH管 PVDF管 官方宣传册 （PP RPP PPH PVDF PTFE管 管件 阀门 板 棒 非标制品加工及销售）</p>
                      </div>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">文档与手册</h3>
                      <ul className="download-list">
                        <li className="download-list-items">
                          <span className="download-list-item-title">产品说明书 Jalader_v19_chs  </span>
                          <span className="download-list-item-date">2022-07-30</span>
                          <div className="download-formats">
                            <a href="assets/down/PP_User_Manual_v19_chs.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon">
                                  <img src={`assets/images/download-o-primary-old.svg`} alt="" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li className="download-list-items">
                          <span className="download-list-item-title">宣传册 电子PDF版 </span>
                          <span className="download-list-item-date">2022-06-20</span>
                          <div className="download-formats">
                            <a href="assets/down/jld-Instruction-manual-v22-chs.PDF" download target="_blank" rel="noopener noreferrer" >
                              <div className="download-format">
                                <div className="donwload-file-name">PDF</div>
                                <div className="download-icon"><img src={`assets/images/download-o-primary-old.svg`} alt="" /></div>
                              </div>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="download-sections">
                      <h3 className="section-title">更新资讯 ▽</h3>
                      <div className="item-head product-lite">
                        <div className="item-icon">
                          <img src={`assets/images/wechat-svgrepo-com.svg`} alt="" className="item-icon-img" />
                        </div>
                        <div className="item-right">
                          <h2 className="item-title">官方微信</h2>
                          <p className="item-description-deep">更多讯息，请联系客服微信，提供专业咨询。</p>
                        </div>
                      </div>
                      <div className="download-sections product-lite ant-sections">
                        <div className="download-section ant-section">
                          <div className="item-icon dot-icon-right">
                            <img src={`assets/images/wechat.png`} alt="" className="item-icon-img" />
                          </div></div>
                      </div>
                    </div>
                    <div className="support-detail"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Download