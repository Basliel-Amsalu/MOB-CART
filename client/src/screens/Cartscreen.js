import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

const Cartscreen = () => {
  const cartItems = useSelector((state) => state.addToCartReducer.cartItems);

  console.log(cartItems);
  const dispatch = useDispatch();
  let totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="row mt-3 justify-content-center">
        <div className="col-md-8 card">
          <h1 className="text-center m-5">MY CART</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>price</th>
                <th>quantity</th>
                <th>total price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addToCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <i
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                        className="far fa-trash-alt"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h2 className=" text-align-center">SUB TOTAL : {totalPrice} $</h2>
          <hr />
          <Checkout cartItems={cartItems} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
