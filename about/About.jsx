import React from 'react';
import Link from 'next/link';
import Customerservice from '../about/Customerservice';
// import Partnerships from '/about/Partnerships';

const About = () => {
  return (
    <div>
      {/* <div className="crumbs">
        <div className="f-content">
          <Link href="/">首页</Link>
          <div className="current">服务</div>
        </div>
      </div> */}
      <Customerservice />
    </div>
  )
}

export default About