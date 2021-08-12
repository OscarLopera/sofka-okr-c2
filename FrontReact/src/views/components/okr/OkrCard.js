import React from 'react';
import KrCard from './KrCard';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ReactTooltip from 'react-tooltip';

const OkrCard = ({ id, title, progress }) => {
  const krs = [
    {
      _id: {
        $oid: "6112bce86e542e34715a7de7",
      },
      title: "KR 1",
      idOkr: "6111e28451a68e1a989edf13",
      description: "lorep ipsum2",
      managerName: "perri2",
      managerEmail: "perri2@loqsea.com",
      startDate: "2020/08/05",
      endDate: "2020/08/08",
      loadValue: {
        $numberInt: "10",
      },
      progress: {
        $numberInt: "10",
      },
    },
    {
      _id: {
        $oid: "6112bcf56e542e34715a7de9",
      },
      title: "probando",
      idOkr: "6111e28451a68e1a989edf13",
      description: "lorep ipsum",
      managerName: "perri",
      managerEmail: "perri@loqsea.com",
      startDate: "2020/08/05",
      endDate: "2020/08/08",
      loadValue: {
        $numberInt: "20",
      },
      progress: {
        $numberInt: "10",
      },
    },
    {
      _id: {
        $oid: "6112cfe2e31df41cbcd22737",
      },
      title: "probando123",
      idOkr: "6111e919787e790ca0f2fef5",
      description: "lorep ipsum",
      managerName: "perri",
      managerEmail: "perri@loqsea.com",
      startDate: "2020/08/05",
      endDate: "2020/08/08",
      loadValue: {
        $numberInt: "10",
      },
      progress: {
        $numberInt: "30",
      },
    },
    {
      _id: {
        $oid: "6112d11d3f34c544cfff9940",
      },
      title: "probandoi",
      idOkr: "6111e919787e790ca0f2fef5",
      description: "lorep ipsumi",
      managerName: "perrii",
      managerEmail: "perrii@loqsea.com",
      startDate: "2020/08/05",
      endDate: "2020/08/08",
      loadValue: {
        $numberInt: "10",
      },
      progress: {
        $numberInt: "40",
      },
    },
    {
      _id: {
        $oid: "6112d69339dded0015eefea6",
      },
      title: "heroku",
      idOkr: "abcd",
      description: "lorep ipsum",
      managerName: "perri",
      managerEmail: "perri@loqsea",
      startDate: "2020/08/05",
      endDate: "2020/08/08",
      loadValue: {
        $numberInt: "10",
      },
      progress: {
        $numberInt: "50",
      },
    },
    {
      _id: {
        $oid: "6112d8f91b861150fbf264f9",
      },
      title: "probandoi",
      idOkr: "6112bce86e542e34715a7de",
      description: "lorep ipsumi",
      managerName: "perrii",
      managerEmail: "perrii@loqsea.com",
      startDate: "2020/08/05",
      endDate: "2020/08/08",
      loadValue: {
        $numberInt: "60",
      },
      progress: {
        $numberInt: "60",
      },
    },
    {
      _id: {
        $oid: "61131202076d8a50c08943a9",
      },
      title: "hjdfg",
      idOkr: "6111e28451a68e1a989edf13",
      description: "lorep ipsum",
      managerName: "perri",
      managerEmail: "perri@loqsea.com",
      startDate: "2020/08/05",
      endDate: "2020/08/08",
      loadValue: {
        $numberInt: "10",
      },
      progress: {
        $numberInt: "70",
      },
    },
  ];

  return (
    <div className="d-flex flex-column p-5 my-5 border rounded shadow">
      <div className="d-flex justify-content-between">
        <div className="container flex-column">
          <h3 className="fw-bold text-uppercase text-wrap">{title}</h3>
          <ProgressBar variant="success" animated now={progress} label={`${progress}%`} style={{ height: "1.5rem" }} />
        </div>
        <div className="d-flex">
          <div className="fs-2 mx-3" data-tip data-for="edit-okr-tip">✏️</div>
          <div className="fs-2 mx-3" data-tip data-for="delete-okr-tip">❌</div>

          <ReactTooltip id="edit-okr-tip" place="top" effect="solid">
            Editar OKR
          </ReactTooltip>
          <ReactTooltip id="delete-okr-tip" place="top" effect="solid">
            Eliminar OKR
          </ReactTooltip>
        </div>
      </div>
      <div>
        <ul className="list-unstyled">
          {krs.map(elem => {
            return (
              <li key={elem._id.$oid}>
                <KrCard title={elem.title} progress={elem.progress.$numberInt} />
              </li>)
          })}
        </ul>
      </div>
    </div>

  );
}

export default OkrCard;