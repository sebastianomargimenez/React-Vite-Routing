import "./notFound.scss"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="notFound">
        <h1>404 not found</h1>
        <hr /> 
        <Link className="link" to="/">Home</Link>
    </div>
  )
}

export default NotFound
