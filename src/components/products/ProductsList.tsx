import React, { Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStateType, IProductState } from "../../store/models/root.interfaces";
import { changeProductPendingEdit, setModificationState } from "../../store/actions/products.action";
import { ProductModificationStatus, IProduct } from "../../store/models/product.interface";


export type productListProps = {
  onSelect: (product: IProduct) => void;
  children?: React.ReactNode;
};

function ProductList(props: productListProps): JSX.Element  {
  const dispatch: Dispatch<any> = useDispatch();
  const products: IProductState = useSelector((state: IStateType) => state.products);

  const productElements: (JSX.Element | null)[] = products.products.map(product => {
    if (!product) { return null; };
    return (<tr className={`table-row ${(products.selectedProduct && products.selectedProduct.id === product.id) ? "selected" : ""}`}
      onClick={() => {
        props.onSelect(product); 

      }}
      key={`product_${product.id}`}>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.amount}</td>
      <td>{product.price}</td>
    </tr>);
  });


  return (
    <div className="table-responsive portlet">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {productElements}
        </tbody>
      </table>
    </div>

  );
};

export default ProductList;
