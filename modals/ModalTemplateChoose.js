// import { Fragment, useEffect } from "react";
import { Row, Col, Modal, Button, CloseButton } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import NoData from "../widgets/NoData";
import templates from "../data/resumeTemplates";


// -------------------------

export default function ModalTemplateChoose({
  visible,
  onDismiss,
  active,
  onChange,
  ...props
}) {
  if (!visible) {
    return null;
  }

  return (
    <Modal show={true} size="lg" onHide={onDismiss} centered>
      <Modal.Header>
        <h4 className="card-header-title">Select template</h4>
        <CloseButton onClick={onDismiss} />
      </Modal.Header>
      <Modal.Body className="resume-preview">
        <Row>
          {templates.map((e, i) => (
            <Col
              key={e}
              xs={6}
              md={4}
              lg={3}
              role="button"
              onClick={() => onChange({ ...e, index: i })}
              className="mb-3"
            >
              <div className={`resume-thumbnail position-relative overflow-hidden rounded ${active.id === e.id && "active"}`}>
                <div
                  className="name position-absolute h-100 w-100"
                  style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                >
                  <div className="text-center">
                    {active.id === e.id && <FeatherIcon icon="check-circle" size="30px" />}
                    <span className=" d-block mt-2">{e.name}</span>
                  </div>
                </div>
                <img
                  src={`/img/resume/${e.thumbnail}`}
                  className="w-100 rounded border"
                  alt="..."
                />
              </div>
            </Col>
          ))}
        </Row>
      </Modal.Body>
    </Modal>
  );
}
