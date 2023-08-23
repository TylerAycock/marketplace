import { Link } from "react-router-dom"
import './ProductCard.css'

const ProductCard = ({item}) => {
    return (
        <Link className="prod-card" to={`/details/${item.id}`}>
            <img src={item.image} alt={item.title} className="prod-img"/>
            <h1 className="prod-title">{item.title}</h1>
        </Link>
    )
}

export default ProductCard