import FirstComponents from './components/FirstComponents';
import ProductDetails from './components/productDetails';
const App = ()=>{
  const products = [
    {
      product_id: 1,
      name:"bag",
      color:["green", "red"],
      product_details: <ProductDetails/>
    },
    {
      product_id: 2,
      name:"pant",
      color:["green", "red"],
      product_details: <ProductDetails/>
    },
    {
      product_id: 3,
      name:"shirt",
      color:["green", "red"],
      product_details: <ProductDetails/>
    },

  ]

  return(
    <div>
       <FirstComponents 
          product={products}
       />
    </div>

  )
}
export default App;