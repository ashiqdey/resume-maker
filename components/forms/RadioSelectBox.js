import React from "react";
import { Badge, Form, Row, Col, ListGroup } from "react-bootstrap";

const RadioSelectBox = ({
  badgeVariant = "primary",
  badgeText,
  text,
  subtext,
  recommendedText,
  value,
  className,
  ...rest
}) => (
  <ListGroup.Item
    as="label"
    role="button"
    style={{
      backgroundColor: rest.checked ? "var(--bs-gray-100)" : "",
      border: rest.checked ? "1px solid var(--bs-primary)" : "1px solid var(--border)",
    }}
    className={className}
  >
    <Row className="gx-2 d-md-flex aifs jcsb">
      <Col xs="auto">
        <Form.Check
          type="radio"
          id={value}
          {...rest}
        />
      </Col>
      <Col>
        <div className="custom-control-label no-copy">
          <div className="d-flex aic jcsb no-copy">
            <div className="text-dark no-copy">{text}</div>
            {
              badgeText && <Badge pill bg={badgeVariant} className="mt-3 no-copy mt-md-0">
                {badgeText}
              </Badge>
            }
          </div>
          {subtext && <small className="text-muted no-copy">{subtext}</small>}
          {recommendedText && <><br></br><small>{recommendedText}</small></>}
        </div>
      </Col>
    </Row>
  </ListGroup.Item>


);
export default RadioSelectBox;
