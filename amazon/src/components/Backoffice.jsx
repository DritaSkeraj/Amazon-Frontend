import React from 'react'
import { addProduct } from "../Api/products";

class  Backoffice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      body: {
        text: "",
      },
      fileSelected: null,
    };
    this.fileRef = React.createRef();
  }
  handleChange = (e) => {
    this.setState({
      body: {
        text: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(AddPost);
    const response = await addProduct(this.state.body);
    this.submitImg(response._id);
    this.props.fetchData();
  };
  fileSelectedHandler = (e) => {
    const data = new FormData();
    data.append("product", e.target.files[0]);
    this.setState({ fileSelected: data });
  };
  submitImg = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/products/${id}/upload`,
        {
          method: "POST",
          body: this.state.fileSelected,
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      if (response.ok) {
        alert("uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };


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
            />
          </div>

          <div className="form-group">
            <label for="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Write here the product description"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="brand">Product Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              placeholder="What company makes this product?"
            />
          </div>
          <div className="form-group">
            <label for="image">Product Image</label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              placeholder="Link to a good photo of the product"
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
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary"
              type="submit"
              value="Submit Product"
            >
              Submit New Product
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