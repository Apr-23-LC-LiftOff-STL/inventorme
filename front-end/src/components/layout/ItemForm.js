import React, { useState } from "react";
// import axios from "axios";

export default function ItemForm() {

// const [itemName, setItemName] = useState("");
// const [itemQuantity, setItemQuantity] = useState("");
// const [Description, setDescription] = useState("");

const [item, setItem] = useState({
  itemName : "",
  itemQuantity : "",
  Description : ""
});

const onChangeItem = (e) => {
  setItem({...item,[e.target.name] : e.target.value})
}
//  const onSubmit = async (e) => {
//   e.preventDefault();
//   await axios.post("http://localhost:8080/item",item);
//  }

const handleClick = (e) => {
  e.preventDefault();

  console.log(`Item Name: ${item.itemName}`);
  console.log(`Quantity: ${item.itemQuantity}`);
  console.log(`Description: ${item.Description}`);
}

  return (
    <div className="container">
      <div className="row">

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 text-center">
          <h2 className="m-4">Create Item</h2>
          
          <form onSubmit={handleClick}>
          
          <div className="text-center mb-3">
            <label htmlFor="Name" className="form-label">
              Item Name
            </label>
            <input type={"text"} 
            className="form-control" 
            placeholder="Enter Item Name"
            name="itemName" 
            value={item.itemName} 
            onChange={onChangeItem}
            />
          </div>
          
          <div className="text-center mb-3">
            <label htmlFor="Quantity" className="form-label">
              Quantity
            </label>
            <input type={"text"} 
            className="form-control" 
            placeholder="Enter Quantity to Store" 
            name="itemQuantity" 
            value={item.itemQuantity} 
            onChange={onChangeItem}
            />
          </div>
          
          <div className="text-center mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input type={"text"} 
            className="form-control" 
            placeholder="Enter Brief Description of Item" 
            name="Description" 
            value={item.Description} 
            onChange={onChangeItem}
            />
          </div>
          
          <button type="submit" className="btn btn-outline-primary">
            Submit
          
          </button>
          
          </form>
        
        </div>

      
      </div>
    </div>
  )
}
