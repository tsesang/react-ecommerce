
import { useSelector } from "react-redux";

export default function CartShoppingSummary() {

//fetching the items from the cart reducer
  // const cartProduct = useSelector((state)=>state.cart.items)
  const cartProduct = JSON.parse(localStorage.getItem('cart'));

  
  //function to calucalute amount
  const calculateAmount = ()=>{
    let totalAmount = 0;
    for(let item of cartProduct){
      totalAmount+=((item.price)*(item.quantity));
    }
    return totalAmount;
  }

  //manually setting the shipping value to 99 
  const shipping = 99;
  //manually setting the tax to be .005% of totalAmount
  const tax = calculateAmount()*.005;

  return (
    <div className="cart-shopping-summary">
      <div className="cart-shopping-summary-items">
        <div>
          <h3>order summary</h3>
          <hr />
          <p>item(s) amount</p>
          <p>shipping</p>
          <p>tax</p>
          <p>Subtotal</p>
          <hr />
          <h3>order total </h3>
          <hr />
        </div>
        <div>
          <h3>{cartProduct.length } items(s)</h3>
          <hr />
          <p>Rs. {calculateAmount()}/-</p>
          <p>Rs. {shipping}/-</p>
          <p>Rs {Math.floor(tax)}/-</p>
          <p> Rs. {Math.floor(calculateAmount()+shipping+tax)}/-</p>

          <hr />
          <h3> Rs.{Math.floor(calculateAmount()+shipping+tax)} /-</h3>
          <hr />
        </div>
      </div>
      <button className="checkout"> CHECK OUT</button>
    </div>
  );
}
