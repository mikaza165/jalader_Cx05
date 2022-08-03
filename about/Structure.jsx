import React from 'react'

const Structure = () => {
  return (
    <>
      <div className="framework-wrap">
        <div className="mod-con clearfix ">
          <div className="t-flx clearfix">
            <div className="label-box">
              <h3>业务架构</h3>
            </div>
          </div>
          <div className="framework-box clearfix">
            <div className="compy">嘉利德</div>
            <div className="list-ul clearfix">
              <div className="li first-li">
                <p className="label">塑胶</p>
                <p className="val">管道板材</p>
              </div>
              <div className="li">
                <p className="label">仪表</p>
                <p className="val">仪表管阀件</p>
              </div>
              <div className="li">
                <p className="label">橡胶</p>
                <p className="val">密封橡胶塞</p>
              </div>
              <div className="li">
                <p className="label">四氟</p>
                <p className="val">板材紧固件</p>
              </div>
              <div className="li">
                <p className="label">母线</p>
                <p className="val">封闭母线槽</p>
              </div>
              <div className="li">
                <p className="label">桥架</p>
                <p className="val">电缆桥架</p>
              </div>
            </div>
            <div className="li-mess-box clearfix">
              <div className="mess-text active-mess">
                经营范围：橡胶制品，四氟制品，塑料管件，仪表管阀件，桥架、母线槽，金属管、五金销售；模具加工、制造。
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Structure