import { Fragment, useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  CloseButton
} from "react-bootstrap";
import { usePDF } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import Resumes from "../widgets/resume/resumes";
import { ResumeFullStack } from "../widgets/resume";

import profile from "../data/resume-profiles/profile1";

const templateId = 0;

// ------------------------------


export default function Index() {

  const [withViewer, setWithViewer] = useState(false);
  const width = 600;

  const [page, setPage] = useState({
    current: 1,
    total: 0,
  });



  const [instance, updateInstance] = usePDF({
    document: (<>
      {templateId === 0 && <ResumeFullStack {...profile} />}
    </>
    ),
  });



  const onLoadSuccess = (pdf) => {
    setPage({
      current: 1,
      total: pdf?.numPages || 1,
    });
  };




  return (
    <div className="main-content public">
      <Container fluid className="px-2 ">
        <div className="form-group mb-2 d-flex">
          <Form.Label>With viewer</Form.Label>
          <Form.Switch
            checked={withViewer}
            onChange={(e) => setWithViewer(!withViewer)}
          />
        </div>

        <Row className="row">
          {!withViewer && <Col xs={12} lg={4}>
            <Card className="position-sticky top-0">
              <Card.Body>
                <Button
                  className="mt-4"
                  size="sm"
                  as="a"
                  href={instance.url}
                  download={`${profile.name.replace(" ","-")}-Full-stack-dev.pdf`}
                >
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>}

          <Col xs={12} lg={withViewer ? 12 : 8}>

            <Card className="bg-light">
              <Card.Body className="resume-preview dev">

                <div className="d-flex aifs jcc">
                  {!instance.loading && (
                    <>
                      <Document
                        file={instance.url}
                        error="Failed"
                        renderMode="canvas"
                        onLoadSuccess={onLoadSuccess}
                      >
                        {Array(page.total)
                          .fill(0)
                          .map((_, i) => (
                            <Fragment key={i}>
                              <Page width={width} pageNumber={i + 1} />
                            </Fragment>
                          ))}
                      </Document>
                    </>
                  )}

                  {withViewer && (
                    <img
                      alt=".."
                      src={`/img/resume/temp/resume-${templateId}.png`}
                      width={width}
                      className="preview-img"
                    />
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>

    </div>
  );
}

