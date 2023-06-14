const players = [
    { name: "Vayne", attack: 20, health: 3, status: "alive" }
];
const monsters = [
    { name: "Minion", attack: 1, health: 5, status: "alive" },
    { name: "Cannon", attack: 2, health: 0, status: "death" }
];


module.exports = {
    players,
    monsters,
};

// /// Một số ràng buộc
// // 1. Không được tồn tại tên trùng nhau trong 1 mảng
// // 2. Các chỉ số không được là số âm

// route.put('/attack', (req, res) => {
//     const { player, monster } = req.body;

//     // player: tên của người chơi
//     // monster: tên của quái vật

//     // ta lấy số máu của player trừ đi chỉ số tấn công của quái vật
//     // tương tự trừ đi máu của quái vật với chỉ số tấn công của người chơi
//     // nếu máu người chơi hoặc quái xuống mức 0
//     // update status của chúng thành 'death'
    

//     // Trả về thông tin người chơi và quái vật sau khi update
// })