import { Link } from "react-router-dom"
import './ProductCard.css'

const ProductCard = ({item}) => {
    return (
        <Link key={item.id} className="prod-card" to={`details/${item.id}`}>
            <h1>{item.title}</h1>
            <img src={item.image} alt="product image" className="prod-img"/>
        </Link>
    )
}

export default ProductCard