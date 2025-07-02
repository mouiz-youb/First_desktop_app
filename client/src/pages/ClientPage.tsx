import { Link } from 'react-router-dom'
function ClientPage() {
  return (
    <div>
        <h1>
            Client page
        </h1>
        <Link to="/" className="text-blue-500 hover:underline">
            Go to Admin Page
        </Link>
    </div>
  )
}

export default ClientPage