import React, { Fragment, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentPath } from "../store/actions/root.actions";

const Home: React.FC = () => {

  const dispatch: Dispatch<any> = useDispatch();
  dispatch(updateCurrentPath("home", ""));

  return (
    <Fragment>
      <h1 className="h3 mb-2 text-gray-800">Charts</h1>
      <p className="mb-4">Chart.js is a third party plugin that is used to
      generate the charts in this theme. The charts below have been customized -
            for further customization options, please visit the.</p>

      <div className="row">

        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div className="card-body">
              Chart.js is a third party plugin that is used to
              generate the charts in this theme. The charts below have been customized -
              for further customization options, please visit the
                    Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file.
                  </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Home;
