import { useState } from "react";
import Star from "./Star";
function StarRating() {
  const [rating, setRating] = useState(0);
  return (
    <span>
      {Array(5)
        .fill()
        .map((_, index) => (
          <Star 
           key={index} 
           filled={index < rating} 
           onClick={() => setRating(index + 1)} />
        ))}
    </span>
  );
}
export default StarRating;
