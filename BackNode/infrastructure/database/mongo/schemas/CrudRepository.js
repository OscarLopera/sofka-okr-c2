const { ObjectId } = require("mongodb")
const connect = require("../../connection")

async function create(collection, data) {
  return connect()
    .then((db) => {
      return db.collection(collection).insertOne(data);
    })
    .then((result) => result.insertedId)
}
async function remove(collection, id) {
  const exist = await this.getById(id)
  if (!exist) {
    throw new Error("No existe")
  }
  return connect()
    .then((db) => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) })
    })
    .then(() => id);
}

async function getAll(collection) {
  return connect().then((db) => {
    return db.collection(collection).find().toArray()
  })
}
async function update(collection, id, data) {
  return connect()
    .then((db) => {
      return db
        .collection(collection)
        .updateOne(
          { _id: ObjectId(id) },
          { $set: data },
          { upsert: true }
        )
    })
    .then((result) => result.upsertedId || id)
}
async function getById(collection, id) {
  return connect().then((db) => {
    return db.collection(collection).findOne({ _id: ObjectId(id) })
  })
}
module.exports = {
  create,
  remove,
  getAll,
  update,
  getById,
}