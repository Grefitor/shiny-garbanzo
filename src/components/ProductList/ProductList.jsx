import React from 'react'
import { PRODUCT_LIST } from '../../data';
import Product from '../Product/Product';

import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">Innovate & Inspire</h1>
      <p className="pl-desc">
        Wren is a creative portfolio that your work has been waiting for.
        Innovative product, stunning portfolio styles & a whole lot more awaits
        inside.
      </p>
    </div>
    <div className="pl-list">
        {
            PRODUCT_LIST.map((item) => (<Product key={item.id} img={item.img} link={item.link}/>))
        }
    </div>
  </div>
  )
}

export default ProductList