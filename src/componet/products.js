import one from "../assets/images/one.jpg"
import  two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"


// products

function Products(){
    return(
      <div classNamw="products" style={{textAlign:"center",marginTop:"2rem",flexGrow:"1"}}>
      
      <div className="box">
          
                  <img src={one} alt="vety"/>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
      </div>
            
      
      <div className="box">
          <img src={two} alt="good"/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
      </div>
      <div className="box">
          <img src={three} alt="bad"/>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>
  
     
  </div>
    )
  }

  export default Products
  export {one,two,three}