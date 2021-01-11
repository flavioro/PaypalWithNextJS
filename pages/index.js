import React, { useState } from 'react';
import ButtonPaypal from "../components/ButtonPaypal"

export default function Home() {
  const [isCheckout, setIsCheckout] = useState(false);
  const order = {
    customer: '1212213123',
    total: '30.00',
    items: [{
      sku: '12344',
      name: 'Camisa React Js',
      price: '300.00',
      quantity: 1,
      currency: 'CAD'
    },
    {
      sku: '123424',
      name: 'Camisa Angular Js',
      price: '125.00',
      quantity: 2,
      currency: 'CAD'
    }
    ]
  }

  if (isCheckout) {
    return (
      <ButtonPaypal total={order.total} items={order.items} />
    )
  }

  return (
    <div>
      <h1>Concept proof</h1>
      <button onClick={() => {
        setIsCheckout(true)
      }}>Checkout to True</button>
    </div>
  )
}
