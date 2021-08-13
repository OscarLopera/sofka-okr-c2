const repositoryNotificationManager = require('../../domain/notifications/notificationManager/repositoryNotificationManager');
const mockRepositoryNotificationManager = new repositoryNotificationManager();
const getNotificationManager = require('../../application/notifications/useCases/getNotificationManager');
const NotificationManager = require('../../domain/notifications/notificationManager/NotificationManager');
const getNoti = require('../../application/notifications/useCases/createNotiManager');

test('Happy path test get notification manager by id', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.findNotificationManagerByUserId = jest.fn(() => persistedNotiManager);

  // when
  const notiManager = await getNotificationManager(mockRepositoryNotificationManager, "abc123");

  // then
  expect(mockRepositoryNotificationManager.findNotificationManagerByUserId).toHaveBeenCalledWith("abc123");
  expect(notiManager).toEqual(persistedNotiManager);
});

test('Sad path test get notification manager by id', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.updateNotificationManager = jest.fn(() => persistedNotiManager);

  // when
  await getNotificationManager(mockRepositoryNotificationManager, "abc123")
    .then(() => expect(new Error("Error metodo no implemenado")))
    .catch((e) => {
      expect(e).toEqual(new Error("Error metodo no implemenado"))
    })

});
