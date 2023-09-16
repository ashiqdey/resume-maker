/*
display title , subtitle, and switch
*/

import { Form } from "react-bootstrap";

const SwitchWithText = ({
  title,
  text,
  ...rest
}) => (<div className="form-group mb-3 d-flex aic jcsb">
  <div>
    <Form.Label className="mb-0 text-capitalize">{title}</Form.Label>
    <div className="small text-muted">{text}</div>
  </div>
  <Form.Switch  {...rest} />
</div>);

export default SwitchWithText;
