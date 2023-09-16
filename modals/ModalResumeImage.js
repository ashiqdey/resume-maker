// import { Fragment, useEffect } from "react";
import { Row, Col, Modal, Button, CloseButton } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

const images = [
  "/img/resume/bg-1.jpg",
  "/img/resume/bg-2.jpg",
  "/img/resume/bg-3.jpg",
  "/img/resume/bg-4.jpg",
  "/img/resume/bg-5.jpg",
];

// -------------------------

export default function ModalResumeImage({
  visible,
  onDismiss,
  onChange,
}) {
  if (!visible) {
    return null;
  }

  return (
    <Modal show={true} size="lg" onHide={onDismiss} centered>
      <Modal.Header>
        <h4 className="card-header-title">Select background</h4>
        <CloseButton onClick={onDismiss} />
      </Modal.Header>
      <Modal.Body className="resume-preview">
        <Row>
          {images.map((src, i) => (
            <Col
              key={src}
              xs={6}
              md={4}
              lg={3}
              role="button"
              onClick={() => onChange(src)}
              className="mb-4"
            >
              <div className="position-relative overflow-hidden rounded">
                {/* {active === src && (
                  <div
                    className="position-absolute h-100 w-100 d-flex aic jcc"
                    style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                  >
                    <FeatherIcon icon="check-circle" size="30px" />
                  </div>
                )} */}
                <img
                  src={src}
                  className="w-100 rounded"
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
