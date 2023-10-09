import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider/StateProvider';
import { getBasketTotal } from '../../StateProvider/reducer';
import { useNavigate } from 'react-router-dom';

function SubTotal() {
  const navigate = useNavigate();
  const [{basket}, dispatch] = useStateValue();

 const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=>navigate("/payment")}>process to checkout</button>

    </div>
  )
}

export default SubTotal