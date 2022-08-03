import React from 'react'

const Wish = () => {
  return (
    <div>
      <div className="wish">
        <div className="mission" id="about-con-2">
          <div className="l-mess">
            <p className="label">愿景及使命</p>
          </div>
          <div className="r-mess">
            <p className="label">勇往前行，铸造非凡</p>
            <p className="desc-tr">
              秉承嘉言善行，利人利己，德行天下；
            </p>
            <p className="desc-tb">
              推动技术创新与质量传承，助力各行各业环保升级，提高水气资源利用。
            </p>
          </div>
          <img src={`/assets/images/jia-icon.png`} alt="img" className="text-bg" />
        </div>
      </div>
    </div>
  )
}

export default Wish