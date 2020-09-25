// String
// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi
console.log("Bài 11: Đếm có bao nhiêu khoảng trắng trong một chuỗi")
function countSpace(str) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count++
        }
    }
    return count
}
console.log("Số khoảng trắng: ",countSpace("123 ANC "))
console.log("")

//12. Hãy remove tất cả khoảng trắng, space và 'enter' trong một chuỗi
console.log("Bài 12: Remove tất cả khoảng trắng, space và 'enter' trong một chuỗi")
function removeSpace(str) {
    var str2 = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            str2 += str.charAt(i)
        }
    }
    return str2
}
console.log(removeSpace("Nguyen Duc Toan"))
console.log("")

//13. Viết chương trình đảo ngược xâu s
console.log("Bài 13: Chương trình đảo ngược xâu s")
function reverseStr(str) {
    var strReverse = ""
    for (var i = (str.length - 1); i >= 0; i--) {
        strReverse += str[i]
    }
    return strReverse
}
console.log(reverseStr("Dao Nguoc"))
console.log("")

//14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1
console.log("Bài 14: Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1")
function func(s1, s2){
    var i = s1.search(s2)
    return i
}
console.log(func("This is a beautiful day","is"))
console.log("")

//15. Viết chương trình chuẩn hóa họ tên
console.log("Bài 15: Chương trình chuẩn hóa họ tên")
function standardName(str) {
    var newStr = str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1)
    for (var i = 0; i < newStr.length; i++) {
        if (str[i] == " ") {
            newStr = newStr.slice(0, i + 1) + newStr.charAt(i + 1).toUpperCase() + newStr.slice(i + 2)
        }
    }
    return newStr
}
console.log(standardName("NguyeN THI tho tHu hA"))
console.log("")

//16. Viết chương trình lấy id name của fb
console.log("Bài 16: Chương trình lấy id name của fb")
function getIdName(str) {
    var idName = str.slice(str.lastIndexOf("/")+1)
    return idName
}
console.log(getIdName("https://www.facebook.com/ngothucdat"))
console.log("")

//17. Viết hàm số tìm min, max của 3 số
console.log("Bài 17: Tìm min, max")
function minTwoNumber(a, b) {
    return (a > b) ? b : a
}

function maxTwoNumber(a, b) {
    return (a > b) ? a : b
}

function findMin(a, b, c) {
    return minTwoNumber(a, minTwoNumber(b, c))
}

function findMax(a, b, c) {
    return maxTwoNumber(a, maxTwoNumber(b, c))
}
console.log("Min: ", findMin(2, 5, 1))
console.log("Max: ", findMax(2, 5, 7))
console.log("")

//18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y
console.log("Bài 18: Tìm vị trí xâu X tồn tại kề cuối trong xâu Y")
function findPosition(s1, s2) {
   var i = s1.lastIndexOf(s2)
   if(i < 0){
       return -1
   }else{
       s1 = s1.slice(0, i)
       return s1.lastIndexOf(s2)
   }
}
console.log(findPosition("This is a beautiful day, is it?", "is"))
console.log("")

//19. Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
console.log("Bài 19: Tính tổng - Đệ quy")
function sumRecursive(n) {
    if (n == 0) {
        return 0
    } else {
        return n + sumRecursive(n - 1)
    }
}
console.log(sumRecursive(9))
console.log("")

//20. [Ignore] Viết 1 hàm chuẩn hóa so sánh của một string, và trả về Xâu chuẩn. Xâu chuẩn là sâu không tồn tại các dấu cách(space) và tab and enter trong value(value là giá trị trong "{value}")

