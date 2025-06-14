import { useState } from 'react'
import useProductStore from '../store/product'

export default function ProductCard({ id, name, price, image }) {
  const { deleteProduct, updateProduct } = useProductStore()
  const [isEditing, setIsEditing] = useState(false)
  const [editedProduct, setEditedProduct] = useState({ name, price, image })

  async function handleDelete(pid) {
    const { success, message } = await deleteProduct(pid)
    console.log(success, message)
  }

  async function handleUpdate(e) {
    e.preventDefault()
    const { success, message } = await updateProduct(id, editedProduct)
    console.log(success, message)
    setIsEditing(false)
  }

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '16px',
    width: '200px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    transition: 'transform 0.2s',
    margin: '10px',
  }

  const imgStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  }

  const nameStyle = {
    fontSize: '18px',
    margin: '8px 0',
    fontWeight: 'bold',
    color: '#333',
  }

  const priceStyle = {
    fontSize: '16px',
    color: '#007bff',
  }

  return (
    <div style={cardStyle}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editedProduct.name}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            placeholder="Name"
          />
          <input
            type="text"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
            placeholder="Price"
          />
          <input
            type="text"
            value={editedProduct.image}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            placeholder="Image URL"
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <img src={image} alt={name} style={imgStyle} />
          <h2 style={nameStyle}>{name}</h2>
          <p style={priceStyle}>${price}</p>
          <button onClick={() => setIsEditing(true)}>Update</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </>
      )}
    </div>
  )
}
