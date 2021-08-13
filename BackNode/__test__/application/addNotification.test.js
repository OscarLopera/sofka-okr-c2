
const notificationRepository = require('../../domain/notifications/notificationRepository');
const mockNotificationRepository = new notificationRepository();
const addNotification = require('../../application/notifications/useCases/addNotification');
const updateOneNotification = require('../../application/notifications/useCases/createNotification');
const Notification = require('../../domain/notifications/notification');

test('HappyPath test add notification', async () => {
  // given
  const persistedNotification = new Notification(123,'luisa_gil0624@hotmail.com', 'se ha creado un KR');
  mockNotificationRepository.save = jest.fn(() => persistedNotification);

  // when
  const notifica = await addNotification(123, 'luisa_gil0624@hotmail.com','se ha creado un KR', mockNotificationRepository );

  // then
  expect(mockNotificationRepository.save).toHaveBeenCalledWith(new Notification (null, 123, 'luisa_gil0624@hotmail.com', 'se ha creado un KR'));
  expect(notifica).toEqual(persistedNotification);
});

test('sadPath test add notification', async () => {
  // given
  const persistedNotification = new Notification(123,'luisa_gil0624@hotmail.com', 'se ha creado un KR');
  mockNotificationRepository.save = jest.fn(() => persistedNotification);

  // when
  await updateOneNotification('123','se ha creado un KR', mockNotificationRepository )
    .then(() => expect(new Error("Error metodo no implementado")))
    .catch((e)=>{
      expect(e).toEqual(new Error("Error metodo no implementado"))
  })
});