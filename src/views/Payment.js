import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
export default class Payment extends Component {
    
    constructor(props){
        super(props);
        this.state={
            price:'20$'
        }
    }
    
    handleToken=(token, addresses)=> {
        const counselor_id=this.props.counselor_id+"";
        const user_id=this.props.uid;
        const rating="1";
        const rate_object={counselor_id,user_id,rating};
        console.log("rate ob")
        console.log(rate_object);
        axios.post('http://localhost:8080/api/user/updatepayment',JSON.stringify(rate_object),{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            console.log(res.data);
            window.location.replace('/user/homepage')
        
        }).catch(err=>{
            console.log(err);
        })
    }
    
  
  
    render() {
    const price=20;
    
    return (
      <div>
      <StripeCheckout
        stripeKey="pk_test_PoSypOzahsGquh3KnblVk5Z1006uhp9kP6"
        token={this.handleToken}
        amount={price*100}
        name="Counselor Payment"
        billingAddress
        shippingAddress
      />
      </div>
    )
  }
}
