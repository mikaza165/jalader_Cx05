import React from 'react'

// import hoo from '../assets/images/sewing-3405975_960_720-1.jpg'
// import agoda from '../assets/images/sewing-3405975_960_720-2.jpg'
// import getsdafe from '../assets/images/sewing-3405975_960_720-3.jpg'
// import grab from '../assets/images/sewing-3405975_960_720-5.jpg'
// import crisp from '../assets/images/sewing-3405975_960_720-4.jpg'
// import anyleads from '../assets/images/sewing-3405975_960_720-6.jpg'
// import teachable from '../assets/images/sewing-3405975_960_720-7.jpg'
// import flyr from '../assets/images/sewing-3405975_960_720-8.jpg'
// import roger from '../assets/images/sewing-3405975_960_720-9.jpg'




const Clients = () => {
  return (
    <div className="maylike-products-wrapper">
      <h2>服务领域</h2>
      <div className="clients-container">
        <div className="clients-group">
          <div className="clients-item hoopsai">
            <img src={`../assets/images/sewing-3405975_960_720-1.jpg`} alt="" />
          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item agoda">
            <img src={`../assets/images/sewing-3405975_960_720-2.jpg`} alt="" />

          </div>
          <div className="clients-item getsafe">
            <img src={`../assets/images/sewing-3405975_960_720-3.jpg`} alt="" />

          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item grab">
            <img src={`../assets/images/sewing-3405975_960_720-4.jpg`} alt="" />

          </div>
          <div className="clients-item crsp">
            <img src={`../assets/images/sewing-3405975_960_720-6.jpg`} alt="" />

          </div>
          <div className="clients-item anyleads">
            <img src={`../assets/images/sewing-3405975_960_720-7.jpg`} alt="" />

          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item teachable">
            <img src={`../assets/images/sewing-3405975_960_720-5.jpg`} alt="" />

          </div>
          <div className="clients-item flyr">
            <img src={`../assets/images/sewing-3405975_960_720-8.jpg`} alt="" />

          </div>
        </div>

        <div className="clients-group">
          <div className="clients-item roger">
            <img src={`../assets/images/sewing-3405975_960_720-9.jpg`} alt="" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Clients