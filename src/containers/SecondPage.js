import axios from 'axios';
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';


function SecondPage() {
  const getCart = () => {
    const url = 'https://giftcardsapidev.azurewebsites.net/api/payment';
    const body = {
      orderId: '82a05f69-9d74-4d78-acf5-229cd64c8d59',
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
      console.log(response)
    }).catch((error) => {
      alert(error.response.data.message)
    })
  }
  
    return(
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <MDBBtn className="m-4" color='secondary' onClick={getCart}>Pagar</MDBBtn>
        </div>
      </div>
    )
}

export default SecondPage;