import React from 'react'
import Link from 'next/link';


const Manage = () => {
  return (
    <>      
      <div className="header-content">
        <section className="page-header-ctrl">
          <div className="header-content">
            <div className="page-header">
              <h2 className="page-header__title">经 营 范 围</h2>
              <div className="location">
                <ul>
                  <Link href="/">
                    <li className="depth current depthActive breadcrumb">首页</li>
                  </Link>
                  <span className="depth current breadcrumb">
                    产品
                  </span>
                </ul>

              </div>
            </div>
          </div>
        </section>
        <div className="sub-st">
          <div className="company">
            <div className="handle">
              <table summary='总纲'>
                <tbody>
                  <tr>
                    <th scope="row"><span>管道</span></th>
                    <td>
                      <ul>
                        <li>PP / FRPP</li>
                        <li>FRPP管</li>
                        <li>PPH</li>
                        <li>PE / HDPE</li>
                        <li>PVDF</li>
                        <li>U - PVC</li>
                        <li>钢丝骨架波纹管</li>
                        <li>C - PVC</li>
                        <li>排风管</li>
                        <li>压力管</li>
                        <li>污水管</li>
                        <li>工业管</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>配件</span></th>
                    <td>
                      <ul>
                        <li>PP</li>
                        <li>FRPP</li>
                        <li>PPH</li>
                        <li>PE</li>
                        <li>PVDF</li>
                        <li>U - PVC</li>
                        <li>电熔配件</li>
                        <li>管箍卡箍</li>
                        <li>螺纹接头</li>
                        <li>风管</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>板材（硬）</span></th>
                    <td>
                      <ul>
                        <li>PP ( 原色 , 白 ) </li>
                        <li>PP ( 灰色 ) </li>
                        <li>PPH</li>
                        <li>PE</li>
                        <li>PVC 有色板</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>辅材</span></th>
                    <td>
                      <ul>
                        <li>PVC 胶水</li>
                        <li>PP 焊丝</li>
                        <li>PPH 焊丝</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>VALVE / 阀门</span></th>
                    <td>
                      <ul>
                        <li>活接</li>
                        <li>球阀</li>
                        <li>隔膜阀</li>
                        <li>止回阀</li>
                        <li>蝶阀</li>
                        <li>底阀</li>
                        <li>双由令球阀</li>
                        <li>液面计</li>
                        <li>玻璃视镜</li>
                        <li>呼吸阀</li>
                        <li>风阀</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>螺栓螺母</span></th>
                    <td>
                      <ul>
                        <li>PP , PVC 塑料螺栓螺母</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>特殊件</span></th>
                    <td>
                      <ul>
                        <li>S 弯</li>
                        <li>P 弯</li>
                        <li>Y 型过滤器</li>
                        <li>钢塑法兰</li>
                        <li>清扫口</li>
                        <li>补偿器</li>
                        <li>打孔填埋管</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>工程加工件</span></th>
                    <td>
                      <ul>
                        <li>按图纸制定加工</li>
                        <li>酸洗槽</li>
                        <li>储罐</li>
                        <li>脱硫</li>
                        <li>洗涤塔</li>
                        <li>油气回收</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><span>焊接</span></th>
                    <td>
                      <ul>
                        <li>便携式热熔器</li>
                        <li>焊接机</li>
                        <li>焊枪</li>
                        <li>现场抢修</li>
                        <li>安装作业</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Manage