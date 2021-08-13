const getNotificationUser = async (notificationRepository, id) => {
  const result = await notificationRepository.findNotiUserByUserId(id)
  return result
}

module.exports = getNotificationUser;