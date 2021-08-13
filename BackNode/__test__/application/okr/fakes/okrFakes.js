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

const okrFull = {
  "okr": {
    "historicalProgress": [
      {
        "date": "2021/08/13",
        "progress": 12
      }
    ],
    "_id": "6115d6da3b7721001559db8d",
    "objective": "Vamos por ello 6",
    "title": "OSCAR",
    "managerId": "611573c2a2605b535bfab39a",
    "description": "Sin descripción",
    "verticalId": "abcde",
    "currentProgress": 12
  },
  "krs": [
    {
      "_id": "6115d6f53b7721001559db8f",
      "title": "Lopera1",
      "idOkr": "6115d6da3b7721001559db8d",
      "description": "lorep ipsum",
      "managerName": "perri",
      "managerEmail": "perri@loqsea.com",
      "startDate": "2020/08/05",
      "endDate": "2020/08/08",
      "loadValue": 10,
      "progress": 100
    },
    {
      "_id": "6115d6fc3b7721001559db91",
      "title": "Lopera2",
      "idOkr": "6115d6da3b7721001559db8d",
      "description": "lorep ipsum",
      "managerName": "perri",
      "managerEmail": "perri@loqsea.com",
      "startDate": "2020/08/05",
      "endDate": "2020/08/08",
      "loadValue": 10,
      "progress": 10
    },
    {
      "_id": "6115d7013b7721001559db93",
      "title": "Lopera3",
      "idOkr": "6115d6da3b7721001559db8d",
      "description": "lorep ipsum",
      "managerName": "perri",
      "managerEmail": "perri@loqsea.com",
      "startDate": "2020/08/05",
      "endDate": "2020/08/08",
      "loadValue": 10,
      "progress": 10
    }
  ]
}

const okrList = [
  {
    "historicalProgress": [
      {
        "date": "2021/08/13",
        "progress": 12
      }
    ],
    "_id": "6115d6da3b7721001559db8d",
    "objective": "Vamos por ello 6",
    "title": "OSCAR",
    "managerId": "611573c2a2605b535bfab39a",
    "description": "Sin descripción",
    "verticalId": "abcde",
    "currentProgress": 12
  },
  {
    "historicalProgress": [
      {
        "date": "2021/08/13",
        "progress": 12
      }
    ],
    "_id": "6115d6da3b7721001559db8d",
    "objective": "Vamos por ello 6",
    "title": "OSCAR",
    "managerId": "611573c2a2605b535bfab39a",
    "description": "Sin descripción",
    "verticalId": "abcde",
    "currentProgress": 12
  }
]

module.exports = { createOkrMock, okrId, badCreateOkrMock, okrFull, okrList };
