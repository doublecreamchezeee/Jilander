// // import firstore (obviously)
// import { firestore } from "firebase-admin"

// // Define the type for your task document
// interface Task {
//   taskName: string
//   taskTime: string // Assuming taskTime is of string type, adjust as necessary
// }

// // This helper function pipes your types through a firestore converter
// const converter = <T>() => ({
//   toFirestore: (data: Partial<T>) => data,
//   fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) => snap.data() as T
// })

// // This helper function exposes a 'typed' version of firestore().collection(collectionPath)
// // Pass it a collectionPath string as the path to the collection in firestore
// // Pass it a type argument representing the 'type' (schema) of the docs in the collection
// const dataPoint = <T>(collectionPath: string) => firestore().collection(collectionPath).withConverter(converter<T>())

// // Construct a database helper object
// const db = {
//   // list your collections here
//   tasks: dataPoint<Task>('tasks'),
// }

// // export your helper
// export { db }
// export default db

// /**
//  * Some examples of how to use:
//  */

// const example = async (id: string) => {
//   // firestore just as you know it, but with types
//   const taskDoc = await db.tasks.doc(id).get()
//   const { taskName, taskTime } = taskDoc.data()
//   return { taskName, taskTime }
// }

// const createExample = async (task: Task) => {
//   await db.tasks.doc().create(task)
// }

// // Always use set for updates as firestore doesn't type update function correctly yet!
// const updateExample = async (id: string, newData: Partial<Task>) => {
//   await db.tasks.doc(id).set(newData, { merge: true })
// }