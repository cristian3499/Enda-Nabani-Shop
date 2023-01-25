import React from 'react'
import  {NavLink}  from "react-router-dom";

/* FILES LOCALS */
import {  } from "./Products.css";
import ProductList from './ProductList'

export const Products = () => {
  const PRODUCTS = ProductList
  console.log(PRODUCTS)
  return (
    <>
      <div class="all-title-box">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <h2>Tienda</h2>
                      <ul class="breadcrumb">
                          <li class="breadcrumb-item"><NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>Inicio</NavLink></li>
                          <li class="breadcrumb-item active" style={{color: 'white'}}>Tienda</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
