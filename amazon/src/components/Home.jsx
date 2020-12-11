import React from 'react'
import { getAllProducts } from "../Api/products";
import Product from "./Product"

class Home extends React.Component {
    state={
        projects:[],
    }

    fetchProducts = async()=>{
        const projects = await getAllProducts()
        console.log(projects)
        this.setState({projects})
    }

    
    componentDidMount = async()=>{
        this.fetchProducts()
    }

    render(){
        return(
            <div>
                {this.state.projects.map((project)=>{
                    return(
                        <Product obj={project}/>
                    )
                })}
            </div>
        )
    }
}

export default Home