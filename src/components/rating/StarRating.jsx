import "./StarRating.css";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(
      <span key={i} className="star full-star">
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{starElements}</div>;
};

export default StarRating;
