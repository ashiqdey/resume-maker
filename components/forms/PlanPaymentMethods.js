import { useState } from "react";
import { ListGroup } from "react-bootstrap";
// import visa from "../../assets/img/brands/visa.svg";
// import mastercard from "../../assets/img/brands/mastercard.svg";
// import paypal from "../../assets/img/brands/paypal.svg";

import RadioSelectBox from "./RadioSelectBox";

const PlanPaymentMethods = ({
  setPaymentMethod,
  paymentMethod,
}) => {
  const [method, setMethod] = useState(paymentMethod || "credit-card");

  const onChange = (type) => {
    if (setPaymentMethod) {
      setPaymentMethod(type)
    }

    setMethod(type)
  }

  return (
    <>
      <ListGroup className="mb-4">
        <RadioSelectBox
          text={
            <div className="w-100 d-flex jcsb aic">
              <div>
                <span>Credit card</span>
                <span className="ml-2 badge-soft-secondary badge rounded-pill">
                  3.4%
                </span>
              </div>
              <div className="d-flex aic">
                {/* <img src={visa} height="15px" alt="" />
                <img src={mastercard} height="15px" alt="" /> */}
              </div>
            </div>
          }
          name="payment-method"
          value="credit-card"
          onChange={() => onChange("credit-card")}
          checked={method === "credit-card"}
        />

        <RadioSelectBox
          text={
            <div>
              Paypal
              {/* <img src={paypal} height="18px" alt="" /> */}
              <span className="ml-2 badge-soft-secondary badge rounded-pill">
                2.8%
              </span>
            </div>
          }
          name="payment-method"
          value="paypal"
          onChange={() => onChange("paypal")}
          checked={method === "paypal"}
        />
      </ListGroup>
    </>
  );
};
export default PlanPaymentMethods;
