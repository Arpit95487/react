 import "./Product.css";
import Price from "./Price.jsx"; 

function Product({title , idx}){
   let  oldPrices= ["12,492","11,999","2,459" , "599"];
   let  newPrices= ["11,892","10,499","5,600" , "299"];
   let Description= [
    ["8,000 DPI","intuitive Surface"],
   ["intuitive Surface","Designed for ipad pro"],
   ["Designed for ipad pro","Wireless"],
   ["Wireless","very durable"]];
    return(
    <div className="Product" >
        <h2>{title}</h2>    
        <p>{Description[idx][0]}</p>
        <p>{Description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
     </div>
    )
}

export default Product