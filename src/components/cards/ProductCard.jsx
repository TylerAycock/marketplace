import { Link } from "react-router-dom"
import './ProductCard.css'

const ProductCard = ({item}) => {
    return (
        <Link className="prod-card" to={`/details/${item.id}`}>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} className="prod-img"/>
        </Link>
    )
}

export default ProductCard