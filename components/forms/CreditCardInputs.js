import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import NumberFormat from "react-number-format";
import FeatherIcon from "feather-icons-react";


const CreditCardInputs = ({ className = "p-4" }) => {
  const [cardNumber, setCardNumber] = useState();
  const [expiry, setExpiry] = useState();
  const [cvv, setCvv] = useState();

  return (
    <>
      <div className={className}>

        <div className="bg-white border rounded d-flex aic mb-4">
          <Form.Control
            as={NumberFormat}
            type="tel"
            format="####-####-####-####"
            mask="_"
            placeholder="Card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border-0"
          />
          <span className="px-3">
            <FeatherIcon icon="credit-card" size="14px" />
          </span>
        </div>


        <div className="bg-white border rounded d-flex aic mb-4">
          <Form.Control
            placeholder="Name on card"
            className="border-0"
          />
          <span className="px-3">
            <FeatherIcon icon="user" size="14px" />
          </span>
        </div>


        <Row>
          <Col md="6">
            <Form.Control
              as={NumberFormat}
              type="tel"
              format="##/##"
              mask="_"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </Col>

          <Col md="6">
            <div className="bg-white border rounded d-flex aic mb-3">
              <Form.Control
                as={NumberFormat}
                type="tel"
                format="###"
                mask="_"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="border-0"
              />
              <span className="px-3">
                <FeatherIcon icon="lock" size="14px" />
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default CreditCardInputs;

