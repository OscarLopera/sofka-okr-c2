const repositoryNotificationManager = require('../../domain/notifications/notificationManager/repositoryNotificationManager');
const mockRepositoryNotificationManager = new repositoryNotificationManager();
const updateNotificationManager = require('../../application/notifications/useCases/updateNotificationManager');
const updateNotiManager = require('../../application/notifications/useCases/createNotiManager');
const updateNotifiManager = require("../../application/notifications/useCases/getNotificationManager")
const NotificationManager = require('../../domain/notifications/notificationManager/NotificationManager');

test('Happy path test add new notification manager', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.updateNotificationManager = jest.fn(() => persistedNotiManager);

  // when
  const notiManager = await updateNotificationManager(mockRepositoryNotificationManager, "abc123", {userId: "abc123", mail:"email12", screen:"screen"} );

  // then
  expect(mockRepositoryNotificationManager.updateNotificationManager).toHaveBeenCalledWith("abc123", new NotificationManager ("abc123", "email12", "screen"));
  expect(notiManager).toEqual(persistedNotiManager);
});

test('Sad path test add new notification manager', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.updateNotificationManager = jest.fn(() => persistedNotiManager);

  // when
  await updateNotiManager(mockRepositoryNotificationManager, "abc123", {userId: "abc123", mail:"email12", screen:"screen"} )
    .then(() => expect(new Error("Error metodo no implemenado")))
    .catch((e) => {
      expect(e).toEqual(new Error("Error metodo no implemenado"))
    })

});

test('Sad path test add new notification manager', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.updateNotificationManager = jest.fn(() => persistedNotiManager);

  // when
  await updateNotifiManager(mockRepositoryNotificationManager, "abc123", {userId: "abc123", mail:"email12", screen:"screen"} )
    .then(() => expect(new Error("Error metodo no implemenado")))
    .catch((e) => {
      expect(e).toEqual(new Error("Error metodo no implemenado"))
    })

});

