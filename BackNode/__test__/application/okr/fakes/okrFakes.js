const createOkrMock = {
  title: "Titulo del Okr",
  managerId: "a1b2c3d",
  verticalId: "a1b2c3d",
  objective: "Vamos por ello",
};

const okrId = "6111e919787e790ca0f2fef5";

const badCreateOkrMock = {
  title: "Titulo del Okr",
  managerId: "a1b2c3d",
  verticalId: "a1b2c3d",
  objective: "onjetivo",
  currentProgress: 50,
};

const okrFull = [
  {
    "okr": {
      "_id": "6115d6da3b7721001559db8d",
      "currentProgress": 12,
      "description": "Sin descripción",
      "historicalProgress": [ { "date": "2021/08/13", "progress": 12 } ],
      "managerId": "611573c2a2605b535bfab39a",
      "objective": "Vamos por ello 6",
      "title": "OSCAR",
      "verticalId": "abcde" 
    },
    "krs": [
      {
          "description": "lorep ipsumi",
          "endDate": "2020/08/08",
          "idOkr": "6112bce86e542e34715a7de",
          "loadValue": 50,
          "managerEmail": "perrii@loqsea.com",
          "managerName": "perrii",
          "progress": 50,
          "startDate": "2020/08/05",
          "title": "probandoi"
      },
      {
          "description": "lorep ipsumi",
          "endDate": "2020/08/08",
          "idOkr": "6112bce86e542e34715a7de",
          "loadValue": 50,
          "managerEmail": "perrii@loqsea.com",
          "managerName": "perrii",
          "progress": 100,
          "startDate": "2020/08/05",
          "title": "probandoi"
      }
  ],
  },
  {
      "okr": {
          "_id": "6115d6da3b7721001559db8o",
          "currentProgress": 12,
          "description": "Sin descripción",
          "historicalProgress": [ { "date": "2021/08/13", "progress": 12 } ],
          "managerId": "611573c2a2605b535bfab39a",
          "objective": "Vamos por ello 6",
          "title": "OSCAR",
          "verticalId": "abcde"
      },
      "krs": [
        {
            "description": "lorep ipsumi",
            "endDate": "2020/08/08",
            "idOkr": "6112bce86e542e34715a7de",
            "loadValue": 50,
            "managerEmail": "perrii@loqsea.com",
            "managerName": "perrii",
            "progress": 50,
            "startDate": "2020/08/05",
            "title": "probandoi"
        },
        {
            "description": "lorep ipsumi",
            "endDate": "2020/08/08",
            "idOkr": "6112bce86e542e34715a7de",
            "loadValue": 50,
            "managerEmail": "perrii@loqsea.com",
            "managerName": "perrii",
            "progress": 100,
            "startDate": "2020/08/05",
            "title": "probandoi"
        }
    ],
  }
]

const okrList = [
  {
    "_id": "6115d6da3b7721001559db8d",
      "currentProgress": 12,
      "description": "Sin descripción",
      "historicalProgress": [ { "date": "2021/08/13", "progress": 12 } ],
      "managerId": "611573c2a2605b535bfab39a",
      "objective": "Vamos por ello 6",
      "title": "OSCAR",
      "verticalId": "abcde" 
  },
  {
    "_id": "6115d6da3b7721001559db8o",
          "currentProgress": 12,
          "description": "Sin descripción",
          "historicalProgress": [ { "date": "2021/08/13", "progress": 12 } ],
          "managerId": "611573c2a2605b535bfab39a",
          "objective": "Vamos por ello 6",
          "title": "OSCAR",
          "verticalId": "abcde"
  }
]

module.exports = { createOkrMock, okrId, badCreateOkrMock, okrFull, okrList };
