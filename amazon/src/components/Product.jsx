import React from 'react'


class Product extends React.Component{



    render(){
        return(
            <div>
                <p>{this.props.obj.name}</p>
            </div>
        )
    }
}

export default Product