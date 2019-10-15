import React from "react";

const ProductList: React.FC = () => {
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
          <tr className="table-row">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>10</td>
            <td>22</td>
          </tr>
          <tr className="table-row selected">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>10</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default ProductList;
