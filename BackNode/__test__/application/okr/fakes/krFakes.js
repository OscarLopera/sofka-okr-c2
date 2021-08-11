const createKrMock = {
  idOkr: "6112bce86e542e34715a7de",
  managerName: "perrii",
  managerEmail: "perrii@loqsea.com",
  startDate: "2020/08/05",
  endDate: "2020/08/08",
  loadValue: 10,
  title: "probandoi",
  description: "lorep ipsumi",
  progress: 10,
};

const krId = "6111e919787e790ca0f2fef5";

const badCreateKrMock = {
  managerName: "perrii",
  managerEmail: "perrii@loqsea.com",
  startDate: "2020/08/05",
  endDate: "2020/08/08",
  loadValue: 10,
  title: "probandoi",
  description: "lorep ipsumi",
  progress: 10,
};
const krList = [
  {
    idOkr: "6112bce86e542e34715a7de",
    managerName: "perrii",
    managerEmail: "perrii@loqsea.com",
    startDate: "2020/08/05",
    endDate: "2020/08/08",
    loadValue: 50,
    title: "probandoi",
    description: "lorep ipsumi",
    progress: 50,
  },
  {
    idOkr: "6112bce86e542e34715a7de",
    managerName: "perrii",
    managerEmail: "perrii@loqsea.com",
    startDate: "2020/08/05",
    endDate: "2020/08/08",
    loadValue: 50,
    title: "probandoi",
    description: "lorep ipsumi",
    progress: 100,
  },
];
const OkrProgress = 75;

module.exports = { createKrMock, krId, badCreateKrMock, krList, OkrProgress };
