import Star from "../assets/star.svg";

export const Rating = ({value}) => {

   const stars = Array(value).fill(Star);

  return (
   <>
   {
    stars.map((star, index) => (
        <img 
        key={index}
        src={star}
        width="14"
        height="14"
        alt="star"/>
    ))
   }
   </>
  )
}