// apiController.js
const { initializeFirebase } = require('../utils/firebaseService');

// Khởi tạo Firebase
const { database, ref, push, remove, onValue } = initializeFirebase();

const addTaskItem = async (req, res) => {
    const { taskName, taskTime } = req.body;
    await push(ref(database, "task/taskInfo"), {
        taskName: taskName,
        taskTime: taskTime
    });
    res.send('Success')
};
  

// Endpoint lấy danh sách tất cả các task
const getAll = async (req, res) => {
    var taskArr;
    await onValue(ref(database, "task/taskInfo"), snapshot => {
        taskArr = snapshot.val();
    });
    return res.json(taskArr);

};

// Endpoint xóa một món ăn dựa trên ID
const deleteFoodItem = (req, res) => {
    const { id } = req.params;
    // Xóa món ăn từ database Firebase
    remove(ref(database, `task/taskInfo/${id}`));
    res.send('Món ăn đã được xóa thành công!');
};

module.exports = { addTaskItem, getAll, deleteFoodItem };
