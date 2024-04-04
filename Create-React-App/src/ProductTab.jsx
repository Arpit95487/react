import Product from "./Product.jsx"

 
function ProductTab(){
let styles= {
   display : "flex",
   flexWrap: "noWrap",
   justifyContent: "center",
   alignItems:"center",
};

 return (
      
    <div style={styles}>
 <Product title="Logitech Mx Master"  idx={0} />
 <Product title="Logitech Mx Master" idx={1}/>
 <Product title="Logitech Mx Master" idx={2}/>
 <Product title="Logitech Mx Master" idx={3}/>

    </div>
 )
}

export default ProductTab