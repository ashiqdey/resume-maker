import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Form, InputGroup } from "react-bootstrap";


const PasswordInput = ({ label, placeholder, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Form.Group className="form-group mb-4">
      {
        label && <Form.Label>{label}</Form.Label>
      }
      <InputGroup className="input-group-merge">
        <Form.Control
          type={passwordVisible ? "text" : "password"}
          placeholder={placeholder || label}
          {...rest}
        />
        <InputGroup.Text
          role="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          <FeatherIcon icon={passwordVisible ? "eye" : "eye-off"} size="1em" />
        </InputGroup.Text>
      </InputGroup>
    </Form.Group>
  );
};
export default PasswordInput;

