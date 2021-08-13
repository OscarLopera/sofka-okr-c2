const makeFakeNotiManager = (info) => {
  const notificationManager =   {
    "mail": info.mail,
    "screen": info.screen,
    "userId": info.userId,
  };
  return notificationManager;
};
module.exports = { makeFakeNotiManager };