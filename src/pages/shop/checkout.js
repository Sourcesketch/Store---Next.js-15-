import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Select,
  Collapse,
} from "antd";
import { useState, useCallback } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

import { formatCurrency } from "../../common/utils";
import { calculateTotalPrice } from "../../common/shopUtils";
import Layout from "../../components/layouts/Layout";
import Container from "../../components/other/Container";
import productData from "../../data/product.json";
import Product from "../../components/product/Product";


export default function checkout() {
  const { Option } = Select;
  const { Panel } = Collapse;
  const router = useRouter();
  const cartState = useSelector((state) => state.cartReducer);
  const globalState = useSelector((state) => state.globalReducer);
  const { currency, locales } = globalState.currency;
  const [paymentMethod, setPaymentMethod] = useState("Direct Bank Transfer");
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const onFinish = (values) => {
    router.push("/shop/checkout-complete");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChoosePayment = useCallback(
    (key) => {
      setPaymentMethod(key);
    },
    [paymentMethod]
  );
  return (
    <Layout title="Checkout">
      <div className="checkout">
        <div className="checkout-top">
          <Container>
            <Row gutter={{ xs: 0, lg: 70 }}>
          
              <Col span={24} md={16} lg={9} xl={7}>
                <div className="checkout-total">
                  <h3 className="checkout-title">Your Order</h3>
                  <div className="checkout-total__table">
                    <div className="divider" />
                    <table className="checkout-total__table-calculate">
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Subtoal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartState.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.name}
                              <span> x {item.cartQuantity}</span>
                            </td>
                            <td>
                              {item.discount
                                ? formatCurrency(
                                    item.price - item.discount,
                                    locales,
                                    currency
                                  )
                                : formatCurrency(item.price, locales, currency)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="divider" />
                    <table className="checkout-total__table-subtotal">
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>
                            {formatCurrency(
                              calculateTotalPrice(cartState),
                              locales,
                              currency
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="divider" />
                    <table className="checkout-total__table-shiping">
                      <tbody>
                        <tr>
                          <td>
                            <h5>Shiping</h5>
                            <p>Shiping to United State</p>
                          </td>
                          <td>Free</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="checkout-total__table-total">
                      <tbody>
                        <tr>
                          <td>Total</td>
                          <td>
                            {formatCurrency(
                              calculateTotalPrice(cartState),
                              locales,
                              currency
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
   
        <div className="checkout-sticky">
          <Container>
            <div className="checkout-functions">
              <Button className="checkout-functions--shopping">
                <Link href={process.env.PUBLIC_URL + "/"}>
                  <a>Continue Shopping</a>
                </Link>
              </Button>
              <div className="checkout-price-finally">
                <table>
                  <tbody>
                    <tr>
                      <td>{cartState.length} items</td>
                      <td>
                        {formatCurrency(
                          calculateTotalPrice(cartState),
                          locales,
                          currency
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Total:</td>
                      <td>
                        {formatCurrency(
                          calculateTotalPrice(cartState),
                          locales,
                          currency
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Button
                className="checkout-functions--next"
                form="checkout-form"
                key="submit"
                htmlType="submit"
                style={{ marginBottom: 0 }}
              >
                Next Step
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
