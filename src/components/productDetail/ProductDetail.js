import { Row, Col, Breadcrumb } from "antd";
import React from "react";

import Container from "../other/Container";
import ProductDetailContent from "./productDetailContent/ProductDetailContent";
import ProductDetailTab from "./productDetailTab/ProductDetailTab";
import ProductDetailImage from "./productDetailImage/ProductDetailImage";

function ProductDetailLayout({ data }) {
  return (
    <div className="product-detail-one">
      <div className="product-detail-one-top">
        <Container>
          <Breadcrumb className="product-detail-breadcrumb" separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
            <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={70}>
            <Col span={24} md={12}>
              <ProductDetailImage imageData={data.images} />
            </Col>
            <Col span={24} md={12}>
              <ProductDetailContent data={data} quantityControllerNoRound />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product-detail-one-bottom">
        <ProductDetailTab />
      </div>
    </div>
  );
}

export default React.memo(ProductDetailLayout);
