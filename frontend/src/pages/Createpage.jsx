import { useState } from 'react'
import useProductStore from '../store/product'
export default function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const { createProduct } = useProductStore()

  async function handleAddProduct() {
    const { success, message } = await createProduct(newProduct)
    console.log(success, message)
    setNewProduct({ name: '', price: '', image: '' })
  }

  const inputStyle = {
    display: 'block',
    width: '300px',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  }

  const buttonStyle = {
    ...inputStyle,
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  }

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  }

  return (
    <div style={containerStyle}>
      <h1>Enlist a Product</h1>
      <input
        type="text"
        name="name"
        placeholder="Name of the product"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        style={inputStyle}
      />
      <input
        type="text"
        name="price"
        placeholder="Price of the product"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
        style={inputStyle}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newProduct.image}
        onChange={(e) =>
          setNewProduct({ ...newProduct, image: e.target.value })
        }
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={handleAddProduct}>
        Add The Product
      </button>
    </div>
  )
}
