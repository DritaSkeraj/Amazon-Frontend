import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import { getAllProducts } from "../Api/products";


class Products extends Component {
    state = {
        products :[],
    }

    fetchProducts = async ()=>{
        const products = await getAllProducts()
        console.log(products)
        this.setState({products})
    }
    componentDidMount = async()=>{
        this.fetchProducts()
    }
    render() {
        return (
            <div>

                {this.state.products.map((product)=>{
                    return ( <SingleProduct obj={product} />)
                })}
           
        
            </div>
        );
    }
}


export default Products;