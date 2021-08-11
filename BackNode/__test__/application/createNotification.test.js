
const notificationRepository = require('../src/domain/notifications/notificationRepository');
const mockNotificationRepository = new notificationRepository();
const addMessage= require('../src/application/usecase/notification/createNotification');
const Message = require('../src/domain/notifications/message');
const saveNotification = require('../src/application/usecase/notification/addNotification');

test('HappyPath test add Message', async () => {
  // given
  const persistedNotification = new Message( 'se ha creado un KR', '11/7/2021' );
  mockNotificationRepository.updateNotification = jest.fn(() => persistedNotification);

  // when
  const mess = await addMessage(123, 'se ha creado un KR', mockNotificationRepository );

  // then
  expect(mockNotificationRepository.updateNotification).toHaveBeenCalledWith(123, new Message ('se ha creado un KR','11/7/2021'));
  expect(mess).toEqual(persistedNotification);
});


test('sadPath test add Message', async () => {
  // given
  const persistedNotification = new Message( 'se ha creado un KR', '11/7/2021' );
  mockNotificationRepository.updateNotification = jest.fn(() => persistedNotification);

  // when
  await saveNotification(123,'luisa_gil0624@hotmail.com', 'se ha creado un KR', mockNotificationRepository )
  .then(() => expect(new Error("Error metodo no implementado")))
  .catch((e)=>{
    expect(e).toEqual(new Error("Error metodo no implementado"))
  })
});
