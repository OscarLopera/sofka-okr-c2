const repositoryNotificationManager = require('../../domain/notifications/notificationManager/repositoryNotificationManager');
const mockRepositoryNotificationManager = new repositoryNotificationManager();
const createNotiManager = require('../../application/notifications/useCases/createNotiManager');
const createNewNotificationManager = require('../../application/notifications/useCases/updateNotificationManager');
const NotificationManager = require('../../domain/notifications/notificationManager/NotificationManager');

test('Happy path test add new notification manager', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.createNotificationManager = jest.fn(() => persistedNotiManager);

  // when
  const notiManager = await createNotiManager(mockRepositoryNotificationManager, {userId: "abc123", mail:"mail", screen:"screen"} );

  // then
  expect(mockRepositoryNotificationManager.createNotificationManager).toHaveBeenCalledWith(new NotificationManager ("abc123", "mail", "screen"));
  expect(notiManager).toEqual(persistedNotiManager);
});

test('Sad path test add new notification manager', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.createNotificationManager = jest.fn(() => persistedNotiManager);

  // when
  await createNewNotificationManager(mockRepositoryNotificationManager, {userId: "abc123", mail:"mail", screen:"screen"} )
    .then(() => expect(new Error("Error metodo no implemenado")))
    .catch((e) => {
      expect(e).toEqual(new Error("Error metodo no implemenado"))
    })

});