import React from 'react';
import { Button } from 'reactstrap';
import "../../assets/styles/okr/OkrPage.css";

const OkrBtn = ({ text }) => {
    return (
        <Button type="button" className="btn sofka-color-btn py-3 px-4 fs-4">
            {text}
        </Button>
    );
}

export default OkrBtn;
