// `Array.prototype.at(index: number)` cho phép truyền vào vị trí của 1 phần tử và trả về phần tử đó
// Nếu số truyền vào là số âm (< 0), vị trí sẽ bị đảo ngược bắt đầu từ cuối mảng

const arr = ['a', 'b', 'c', 'd'];


arr.at(1) // 'a'
arr.at(2) // 'b'
arr.at(-1) // 'd'