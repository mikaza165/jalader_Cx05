import React from 'react'

const Team = () => {
  return (
    <>
      <div className="team">
        <section className="rotate-1">
          <p className="text-center text-2xl">JLD 团队从事产品磨具开发，磨具实际实验投产，到产品按照客户实际现场需求精进的一整条服务链。</p>
          <p className="text-center text-2xl">客户从实际改进中体会到性价比、设备产品投产实际运营中按需订制。</p>
          <p className="text-center text-2xl">帮助企业真正获取产品自身实际拥有的性能和实际价值。</p>
        </section>
        <div className="cross-arrow text-center">
          <img className="m-auto" src="assets/images/arrow-4.svg" alt="" />
        </div>
        <section className="subtitle rotate-2">
          <p className="text-center text-2xl">念以服务客户需求为核心竞争力，专业的技术力量为企业的第一生产力。</p>
          <p className="text-center text-2xl">数十技术工程师组成技术支持团队，可高速与客户需求对接，与时俱进。</p>
        </section>
        <div className="arrow-2">
          <img src="assets/images/arrow-4.svg" alt="" />
        </div>
        <section className="subscribe mr-16 ">
          <div>
            <p className="text-center text-2xl">职业化·售后团队24小时服务</p>
            <p className="text-center text-2xl">随时、随地、随机的响应方案</p>
            <p className="text-center text-2xl">满足客户需求，服务与时代同行</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Team