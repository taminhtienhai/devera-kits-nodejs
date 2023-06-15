// `Array.prototype.map((value: any, index: number) => any)` tạo ra 1 mảng mới là biến đổi (transform) của mảng cũ
// Nó nhận vào 1 hàm lần có cấu trúc như sau:
// (value: any, index: number) => any
// - value: Phần tử được duyệt trong mảng
// - index: Vị trí của phần từ được duyệt
// Hàm này trả về 1 giá trị mới tùy theo mục đích của người sử dụng


/// Ví dụ 1: Cho mảng [1,2,3], hãy nhân đôi giá trị của các phần tử có trong mảng

const arr = [1,2,3];

arr.map((it) => it * 2); // [2,4,6]

/// Ví dụ 2: Cho mảng ['a', 'b', 'c'], hãy trả về mảng mới với từng phần tử ứng với công thức sau
/// {item} at {index}

const arr02 = ['a','b','c'];

arr02.map((it, index) => it + ' at ' + index); // ['a at 0', 'b at 1', 'c at 2']