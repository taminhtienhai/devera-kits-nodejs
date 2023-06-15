// `Array.prototype.concat(arr: any[])` nhận đầu vào là 1 mảng khác
// khi gọi sẽ trả về một mảng mới là kết hợp giữa 2 mảng ban đầu
// *Lưu ý: Mảng ban đầu sẽ không bị thay đổi


const arr01 = [1,2,3];
const arr02 = [4,5,5];

arr01.concat(arr02) // [1,2,3,4,5,6]