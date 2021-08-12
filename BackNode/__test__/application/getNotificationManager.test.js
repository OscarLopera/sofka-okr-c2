const repositoryNotificationManager = require('../../domain/notifications/notificationManager/repositoryNotificationManager');
const mockRepositoryNotificationManager = new repositoryNotificationManager();
const getNotificationManager = require('../../application/notifications/useCases/getNotificationManager');
const NotificationManager = require('../../domain/notifications/notificationManager/NotificationManager');

test('Happy path test get notification manager by id', async () => {
  // given
  const persistedNotiManager = new NotificationManager("abc123", "mail", "screen");
  mockRepositoryNotificationManager.findNotificationManagerByUserId = jest.fn(() => persistedNotiManager);

  // when
  const notiManager = await getNotificationManager(mockRepositoryNotificationManager, "abc123");

  // then
  expect(mockRepositoryNotificationManager.findNotificationManagerByUserId).toHaveBeenCalledWith("abc123", "mail", "screen");
  expect(notiManager).toEqual(persistedNotiManager);
});
