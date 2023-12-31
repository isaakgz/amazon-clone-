import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { useStateValue } from '../../StateProvider/StateProvider';
import CheckOutProdct from '../Checkout/CheckOutProdct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../../StateProvider/reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import { db } from '../../firbase';
// import { auth } from '../../firbase';

function Payment() {

    
    const navigate = useNavigate()
    const [{basket, user}, dispatch] = useStateValue();


    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setsucceeded] = useState(false);
    const [Processing, setProcessing] = useState("")
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true); 
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
          const response = await axios({
            method: "post",
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
          });
          setClientSecret(response.data.clientSecret);
        };
    
        getClientSecret();
      }, [basket]);

      console.log(`the secrete code is ${clientSecret}`)

    
    
    const handleSubmit= async (event)=> {
        event.preventDefault();
        setProcessing(true);

        const payLoad = await stripe
        .confirmCardPayment(clientSecret, {
            payment_method:{
                card:elements?.getElement(CardElement)
            }
        })
        .then(({paymentIntent})=>{


            db
            .collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created : paymentIntent.created
            })
            //paymentIntent is payment confirmation
            setsucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET",
              });
      
            

            navigate('/orders', { replace: true });
        })
        
        
    }
    
    const handleChange = (event)=>{

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")

        // const payLoad = await stripe

    }

  return (
    <div className='payment'>
        <div className="payment__container">
            <h1>CheckOut(<Link to="/checkout">{basket?.length} items</Link>)</h1>
            <div className="paymnet__section">
                <div className="payment__title">
                    <h3>Delivery Adress</h3>
                </div>
                <address className="payment__adress">
                    <p>{user?.email}</p>
                    <p>123 street</p>
                    <p>Addis Ababa , EThiopia</p>
                </address>
            </div>
            <div className="paymnet__section">
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment__items">
                {basket.map(item=>(
              <CheckOutProdct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
               />
            ))}
                </div>
            </div>
            <div className="paymnet__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                        <CurrencyFormat
                            renderText={(value) => (
                            
                                <h3>Order Total: {value}</h3>
                            
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button disabled = {Processing || disabled || succeeded}> <span>{Processing? <p>Processing</p> : "Buy Now"}</span>
                        </button>

                        </div>
                        {error && <div>
                            {error}
                        </div>}
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment