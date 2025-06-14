import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}
      >
        Product Store
      </Link>
      <Link
        to="/create"
        style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}
      >
        Create
      </Link>
    </div>
  )
}
