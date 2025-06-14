import { useEffect } from 'react'
import useProductStore from '../store/product'
import ProductCard from '../Components/ProductCard'

export default function HomePage() {
  const { fetchProducts, products } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  console.log(products)
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Product Store
      </h1>

      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No products available.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id = {product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  )
  
}
