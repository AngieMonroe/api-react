import axios from 'axios';
import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function HomeContainer() {
  const [orders, setOrders] = useState();
  const [url, setUrl] = useState();
  const navigate = useNavigate();

  const getOrder = () => {
    const url = 'https://giftcardsapidev';
    const body = {
      partnerId: 'bonnus-test',
      ipAddress: '192.168.0.1',
      userAgent: 'Browser',
      userId: null,
      currency: 'MXN',
      amountCart: 25000,
      discountCode:'PROMO01_P',
      cart: [
              {
                  giftcardId:'Flux-Test-Cantidad',
                  amount: 50000,
                  style: '4',
                  isScheduled: false,
                  scheduledDate: null,
                  isGift: false,
                  toName: '',
                  toEmail: '',
                  toMessage: '',
                  toPhone:''
              },
              {
                  giftcardId:'Flux-Test-Porcentaje',
                  amount: 50000,
                  style: '4',
                  isScheduled: false,
                  scheduledDate: null,
                  isGift: false,
                  toName: '',
                  toEmail: '',
                  toMessage: '',
                  toPhone:''
              }
          ]
  }
    axios.get(url, body)
    .then(response => {
      setOrders(response.data)
    }).catch(error => {
      alert(error.response.data.message)
    })
  }


  const getPayment = () => {
    const url = 'https://giftcardsapidev.azurewebsites.net/api/payment';
    const max = orders.length - 1;
    const indexRandom = Math.floor((Math.random() * max) + 1);
    const body = {
      orderId: orders[indexRandom].id,
      card:
      {
          number: '4000000000003220',
          expMonth: 9,
          expYear: 2022,
          Cvv: '031'
      },
      user:{
          name: 'Manuel Valdes',
          email: 'valmans@hotmail.com'
      },
      saveMethod: false
   }
    axios.post(url, body)
    .then(response => {
      setUrl(response.data)
      setTimeout(() => {
      navigate('/cart/callback')
      }, 4000)
      
    }).catch(error => {
      alert(error.response.data.message)
    })
  }
    return(
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <MDBBtn className="m-4" color='primary' onClick={getOrder}>Crear Orden</MDBBtn>
          {orders && <MDBBtn className="m-4" color='secondary' onClick={getPayment}>Pagar</MDBBtn>}
        </div>
        {url && 
        <iframe className="w-100" src={url.url}></iframe>
        
        }
      </div>
    )
}

export default HomeContainer;