import React from "react";
import KrForm from "../../components/okr/KrForm";
import { createKr } from "../../../application/actions/okr/KrAction";

const CrearKrPage = ({ createKr }) => {
  return (
    <div>
      <KrForm />
    </div>
  );
};

export default CrearKrPage;
