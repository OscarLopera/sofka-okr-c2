
const notificationRepository = require('../../domain/notifications/notificationRepository');
const mockNotificationRepository = new notificationRepository();
const addMessage= require('../../application/notifications/useCases/createNotification');
const Message = require('../../domain/notifications/message');
const saveNotification = require('../../application/notifications/useCases/addNotification');

test('HappyPath test add Message', async () => {
  // given
  var objFecha = new Date();
  var day  = objFecha.getDate();
  var Month  = objFecha.getMonth();
  var year = objFecha.getFullYear();
  const date = ( day + "/" + Month + "/" + year );

  const persistedNotification = new Message( 'se ha creado un KR', date );
  mockNotificationRepository.updateNotification = jest.fn(() => persistedNotification);

  // when
  const mess = await addMessage(123, 'se ha creado un KR', mockNotificationRepository );

  // then
  expect(mockNotificationRepository.updateNotification).toHaveBeenCalledWith(123, new Message ('se ha creado un KR', date));
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
