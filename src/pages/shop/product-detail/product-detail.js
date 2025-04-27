import Layout from "../../../components/layouts/Layout";
import { capitalizeFirstLetter } from "../../../common/utils";
import productData from "../../../data/product.json";
import ProductDetail from "../../../components/productDetail/ProductDetail";

export default function pid() {
  return (
    <Layout title={productData[0].name} clearSpaceTop>
      <ProductDetail data={productData[0]} />
    </Layout>
  );
}
