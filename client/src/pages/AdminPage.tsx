import { Link } from 'react-router-dom'
function AdminPage() {
  return (
    <div>
        <h1>Admin page</h1>
        <p>Welcome to the admin page!</p>
        <Link to="/client" className="text-blue-500 hover:underline">
          Go to Client Page
          </Link>
    </div>
  )
}

export default AdminPage