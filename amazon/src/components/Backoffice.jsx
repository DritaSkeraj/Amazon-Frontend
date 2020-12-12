import React from 'react'
import { addProduct } from "../Api/products";
import { UploadMyPhoto } from "../Api/upload";

import { FaCamera,FaPhotoVideo,FaPaperPlane } from "react-icons/fa";

class Backoffice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      post:null,
     
      file: null,
    };
    
  }
  handleChange = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        [e.target.id]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await addProduct(this.state.product);
    console.log(response)
    console.log(response.id)
    let file = this.state.file;

    let formData = new FormData();

    formData.append("product", file);
    this.setState({post:formData})
    console.log(file)
 
  
   console.log(this.state.post)

   await UploadMyPhoto(response.id, this.state.post);
   
   
  };
  
  handleFile(e) {
    let file = e.target.files[0];

    this.setState({ file });
  }
 


  render(){
 
    return(
      <>
      <div className="container">
    <h2 className="text-center mt-5">Create a new product</h2>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form onsubmit="handleSubmit(event)">
          <div className="form-group">
            <label for="name">Product name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Write here the product name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Write here the product description"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label for="brand">Product Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              placeholder="What company makes this product?"
              onChange={this.handleChange}
            />
          </div>
        
          <div className="form-group">
            <label for="price">Product price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              min="0"
              step="0.01"
              placeholder="How much does this product cost?"
              onChange={this.handleChange}
            />
          </div>
            
         
              <div>
              <form>
          <div className="">
            <label className="ml-2">Select File</label>
            <input type="file" name="file" onChange={e => this.handleFile(e)} />
          </div>
       
        </form>
              <button
                style={{
                  color: "#616160",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  padding: "2px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: "10px",
                  marginLeft: "2px",
                }}
                className="btn-upload ml-2 left-border"
                onClick={this.handleSubmit}
              >
                <FaPaperPlane
                  size="20"
                  style={{
                    width: "30px",
                    marginRight: "4px",
                    marginBottom: "2px",
                  }}
                />
                Send
              </button>
            </div>
         
        </form>
      </div>
    </div>
  </div>

      </>
  )
  }
 
}

export default Backoffice;