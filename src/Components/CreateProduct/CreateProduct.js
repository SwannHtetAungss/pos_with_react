import "./CreateProduct.css";
import ProductForm from "./ProductForm";

const CreateProduct = (props) => {
  const saveNewProduct = (enterNewProduct) => {
    const addNewProdcut = {
      ...enterNewProduct,
      id: `p${props.products.length + 1}`,
    };
    props.productHandler(addNewProdcut);
  };
  return (
    <div className="col-1">
      <ProductForm addProduct={saveNewProduct} />
    </div>
  );
};

export default CreateProduct;
