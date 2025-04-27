import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import Container from "../other/Container";

function Footer({ containerType }) {
  return (
    <div className="footer">

      <div className="footer-bottom">
        <Container type={containerType}>
          <p>Copyright © 2020 Avitex Inc. All rights reserved</p>
        </Container>
      </div>
    </div>
  );
}

export default React.memo(Footer);
