import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";


export default function FavoriteButton({ id, isFavorite, onToggleFavorite }) {
  // this should be a state variable
  //const [isFavorite, setIsFavorite] = useState(false);
  

  //function toggleFavoriteButton(){
    //setIsFavorite(!isFavorite);
  //};

  return (
    
    <button
      className="favorite-button"
      onClick={()=>onToggleFavorite(id)}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
