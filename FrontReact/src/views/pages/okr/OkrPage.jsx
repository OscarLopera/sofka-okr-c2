
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import "../../assets/styles/okr/OkrPage.css";
import EmptyMessage from "../../components/okr/EmptyMessage";




const OkrPage = () => {
  const okrs = [];
  return (

    
    <div className="container d-flex flex-column align-items-center py-5">
   

      {okrs.length === 0 ? (
        <>
          <EmptyMessage />
          <Button type="button" className="btn sofka-color-btn py-3 px-4 fs-4">
            crear okr
          </Button>
        </>
      ) : (
        <>
          <Button type="button" className="btn sofka-color-btn py-3 px-4 fs-4">
            crear okr
          </Button>
          <p>Lista de OKR</p>
        </>
      )}
    </div>
  );
};

export default OkrPage;
