// apiController.js
const { initializeFirebase } = require('../utils/firebaseService');

// Khởi tạo Firebase
const { database, ref, push, remove, onValue } = initializeFirebase();

// Endpoint thêm một món ăn mới
const addFoodItem = (req, res) => {
    const { item } = req.body;
    push(ref(database, "task/taskInfo"), item);
    res.send('Thêm task thành công');
};

// Endpoint lấy danh sách tất cả các món ăn
const getAllFoodItems = (req, res) => {
    onValue(ref(database, "task/taskInfo"), snapshot => {
        const data = snapshot.val();
        res.json(data);
    });
};

// Endpoint xóa một món ăn dựa trên ID
const deleteFoodItem = (req, res) => {
    const { id } = req.params;
    // Xóa món ăn từ database Firebase
    remove(ref(database, `task/taskInfo/${id}`));
    res.send('Món ăn đã được xóa thành công!');
};

module.exports = { addFoodItem, getAllFoodItems, deleteFoodItem };
