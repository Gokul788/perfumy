import Navbar  from "./componet/navbar"
import Searchbar from "./componet/search"
import Products from "./componet/products"
import About from "./componet/About"
import Footer from "./componet/Footer"

function App(){

    return(
        <div>
            <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Products></Products>
    <About></About>
    <Footer></Footer>
        </div>
    )
}

export default App
