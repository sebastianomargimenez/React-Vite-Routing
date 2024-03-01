import "./navigation.scss"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="nav">
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/contact">contact</Link>
        </div>
    </div>
  )
}

export default Navigation
