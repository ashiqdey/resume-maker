import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";

export default function CounterTextarea({
  value,
  setValue,
  label,
  minRows = 3,
  maxLength = 500,
  ...rest
}) {
  // const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);

  function handleInputChange(e) {
    const value = e.target.value;

    if (value.length <= maxLength) {
      if (setValue) {
        setValue(e.target.value);
      }
      setCounter(e.target.value.length);
    }
  }

  return (
    <>
      <Form.Label className="mb-1">{label}</Form.Label>
      <div className="form-group">
        <Form.Control
          as={TextareaAutosize}
          className="mb-0"
          minRows={minRows}
          value={value}
          maxLength={maxLength}
          {...rest}
          onChange={(e) => {
            handleInputChange(e);
            if (rest.onChange) {
              rest.onChange(e);
            }
          }}
        />
        <small className="text-muted">
          {counter}/{maxLength}
        </small>
      </div>
    </>
  );
}
