import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./Components/HomeScreen/Header/Header";
import Home from "./Components/HomeScreen/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import React, { useEffect } from "react";
import { auth } from "./firbase";
import { useStateValue } from "./StateProvider/StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Components/Orders/Orders";


const promice = loadStripe("pk_test_51NwjmXDLellSq864x01Hkn3ZtrCY2i9nXp3iikulHQP6KlQHVw1r9ZtxanxNl5mXE2HEqrczjO1IHlr9CBajNDya00YdSx909T")
function App() {
  const [{  }, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is ===" , authUser)

      if (authUser) {

        dispatch({
          type:"SET_USER",
          user:authUser
        })
      
      } else{
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })
    

  }, [])
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
             <Login />
              </>
            }
          />
           <Route
            path="/payment"
            element={
              <>
              <Header />
              <Elements stripe={promice}>
             <Payment />
              </Elements>
              </>
            }
          /> 
           <Route
            path="/orders"
            element={
              <>
              <Header />
              <Orders />
              </>
            }
          /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
