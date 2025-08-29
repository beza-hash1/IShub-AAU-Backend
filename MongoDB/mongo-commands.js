
//use isHubDB


db.users.insertMany([
  { _id: 1, name: "Beza", email: "beza@example.com" },
  { _id: 2, name: "Selam", email: "selam@example.com" }
])


db.tasks.insertMany([
  { title: "Setup Backend", assignedTo: 1, status: "pending", tags: ["backend", "setup"] },
  { title: "Create Frontend", assignedTo: 2, status: "in progress", tags: ["frontend"] },
  { title: "Database Design", assignedTo: 1, status: "done", tags: ["database", "design"] }
])


db.tasks.updateOne({ title: "Setup Backend" }, { $set: { assignedTo: 1 } }) // Beza
db.tasks.updateOne({ title: "Create Frontend" }, { $set: { assignedTo: 2 } }) // Selam


db.users.updateOne({ name: "Beza" }, { $set: { email: "beza_new@example.com" } })


db.users.deleteOne({ name: "Selam" })


db.users.find()
db.tasks.find({ assignedTo: 1 })
db.tasks.find({ status: "done" })
db.tasks.find({}, { title: 1, _id: 0 })


db.tasks.updateMany({ status: "pending" }, { $set: { status: "in progress" } })
db.tasks.updateOne({ title: "Setup Backend" }, { $push: { tags: "urgent" } })

db.tasks.deleteMany({ status: "done" })
