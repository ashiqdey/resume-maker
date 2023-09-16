import React from "react";
// import { Button, Card, Col, Row } from "react-bootstrap";

import imageFallback from "../public/img/book.svg";

export default function NoData({
  image = true,
  title = "No Data",
  description = "No data found",
  width = "120px",
  children
}) {
  return (
    <div className="text-center py-5">
      {
        image && <img src={image != true ? image : imageFallback.src} width={width} alt='...' />
      }
      <h3 className="mb-0 mt-4">{title}</h3>
      <p className="text-muted mb-1 mt-1 mw400 m-auto">{description}</p>
      {
        children
      }
    </div>
  );
}
