import React, { useState, useEffect, useRef } from "react";

const ButtonPaypal = (props) => {
  const { items, total } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  const paypalConf = {
    currency: "USD",
    env: "sandbox",
    client: {
      sandbox:
        "AXfyu-OdOP3f-ynmKiWrxUr8qYWm8ireUNH8ylgBftqwAuG6Qrd5rgJ6vrUIb667eiMeJThuN30-0BCq",
      production: "",
    },
    style: {
      label: "pay",
      size: "medium",
      shape: "rect",
      color: "gold",
    },
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          color: "blue",
          borderRadius: "6",
          label: "pay",
          height: 40,
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: items.name,
                amount: {
                  currency_code: paypalConf.currency,
                  value: total,
                },
              },
            ],
            note_to_payer: "Contact us for any questions.",
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log("ORDER", order);
          console.log("data : ", data);
        },
        onError: (err) => {
          setError(err);
          console.error("ERROR", err);
        },
      })
      .render(paypalRef.current);
    console.log("paypalRef -> Current: ", paypalRef.current);
  }, [items]);

  if (paidFor) {
    return <div>Thanks for making the purchase.</div>;
  }

  if (error) {
    return <div>Error in processing order. Please Retry again</div>;
  }

  return (
    <>
      <div
        className="container_btn_paypal"
        ref={paypalRef}
        style={paypalConf.style}
      />
      <style jsx>
        {`
          .container_btn_paypal {
            width: 15%;
          }
        `}
      </style>
    </>
  );
};

export default ButtonPaypal;
