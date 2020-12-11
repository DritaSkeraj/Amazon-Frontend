import React from 'react'

const Backoffice = () =>{
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

export default Backoffice;