import React from "react";
import "../../assets/styles/okr/OkrPage.css";
import { Button } from "reactstrap";

const OkrPage = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center py-5">
        <Button type="button" className="btn sofka-color-btn py-3 px-4 fs-4">
          crear okr
        </Button>
      </div>
      <h1>Okr Page</h1>
    </div>
  );
};

export default OkrPage;
