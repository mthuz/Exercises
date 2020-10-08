// 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90
console.log("Bài 21")
// function sumArr(a) {
//     var sum = 0
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i]
//     }
//     return sum
// }

function sumArr(arr) {
    var sum = arr.reduce((a, b) => a + b)
    return sum
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("Sum: ", sumArr(a))
console.log("")

// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5
console.log("Bài 22")
function findMin(a) {
    var min = a[0]
    for (var i = 1; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i]
        }
    }
    return min
}

function findMax(a) {
    var max = a[0]
    for (var i = 1; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i]
        }
    }
    return max
}

function minMaxAvg(a) {
    var min, max, avg
    min = findMin(a)
    max = findMax(a)
    avg = sumArr(a) / a.length
    return { min, max, avg }
}
console.log(minMaxAvg(a))
console.log("")

// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3
console.log("Bài 23")
function frequencyMax(a) {
    var max = 0
    var count = 1
    for (var i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1]) {
            count++
            if (count > max) {
                max = count
            }
        } else {
            count = 1
        }
    }
    return max
}
console.log("frequencyMax: ", frequencyMax(a))
console.log("")

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
console.log("Bài 24")
function checkPrime(n) {
    if (n < 2) {
        return 0
    } else {
        if (n == 2 | n == 3) {
            return n
        } else {
            for (var i = 2; i <= Math.sqrt(n); i++) {
                if (n % i !== 0) {
                    return n
                }
            }
        }
    }
}

// function findPrime(a) {
//     var b = [];
//     for (var i = 0; i < a.length; i++) {
//         if (checkPrime(a[i])) {
//             b = b.concat(a[i])
//         }
//     }
//     return b
// }

function findPrime(a) {
    var b = a.filter(checkPrime)
    return b
}
console.log(findPrime(a))
console.log("")

// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
console.log("Bài 25")
function squareArray(a) {
    var b = []
    for (var i = 0; i < a.length; i++) {
        b.push(a[i] * a[i])
    }
    return b
}
console.log(squareArray(a))
console.log("")

// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]
console.log("Bài 26")
function minPos(a, k) {
    var pos
    var b = []
    var c = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] < k) {
            pos = k - a[i]
            b.push(pos)
        } else {
            pos = a[i] - k
            b.push(pos)
        }
    }
    var min = findMin(b)
    for (let i = 0; i < b.length; i++) {
        if (b[i] == min) {
            c.push(a[i])
        }
    }
    return c
}
var ar = [1, 2, 3, 4, 6, 7]
console.log(minPos(ar, 5))
console.log("")

//--------------------------------------

var students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX3",
        firstName: "Do",
        lastName: "dUc Dat"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    },
    {
        id: "T3HXX8",
        firstName: "Do",
        lastName: "Thanh Thuy"
    }
]

// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
console.log("Bài 27")
function checkName(name) {
    var result = ""
    for (var i = 0; i < name.length; i++) {
        if (i === 0 || name[i - 1] === " ") {
            result += name[i].toUpperCase()
        } else {
            result += name[i].toLowerCase()
        }
    }
    return result
}

var filterName = (name) => {
    return name.lastName.length > 2 && name.lastName.includes("a") || name.lastName.includes("A")
}

function bai27(a) {
    var f = a.filter(filterName).map((std) => {
        return {
            id: std.id,
            firstName: checkName(std.firstName),
            lastName: checkName(std.lastName)
        }
    })
    return f
}

console.log(bai27(students))
console.log("")

// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
console.log("Bài 28")
var filterFirstName = (name) => {
    return name.firstName === "Do"
}

function findIndividualStudent(a) {
    var results = a.filter(filterFirstName)
    return results
}
console.log(findIndividualStudent(students))
console.log("")

// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy sắp xếp danh sách học viên theo tên (firstName).
console.log("Bài 29")
function sortName(std) {
    std.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    return std
}
console.log(sortName(students))
console.log("")

// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
// VD: a = [1,1,1,1,1,1,1,1,1,1], output: -1
console.log("Bài 30")
function maxSecond(a) {
    a = a.sort()
    var max = a[a.length - 1]
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] == max) {
            a.pop()
        }
    }
    if (a.length === 0) {
        return -1
    } else {
        return a[a.length - 1]
    }
}
console.log(a)
console.log("Số lớn thứ hai: ", maxSecond(a))
console.log("")

// 31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 26 .Output: YES.giải thích ( 9 + 9 + 8)
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 30 .Output: NO
console.log("Bài 31")
function sumThreeNumber(a, k) {
    var sum = 0
    var b = []
    for (var i = 0; i < a.length - 2; i++) {
        for (var j = i + 1; j < a.length - 1; j++) {
            for (var s = j + 1; s < a.length; s++) {
                sum = a[i] + a[j] + a[s]
                b.push(sum)
            }
        }
    }
    if (b.includes(k) === true) {
        return 1
    } else {
        return 0
    }
}
var a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(a2)
if (sumThreeNumber(a2, 26) === 1) {
    console.log("YES")
} else {
    console.log("NO")
}
console.log("")

// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
// VD: a = [1,3,6,9,11,20]; k = 13 .Output: a = [1,3,6,9,11,13,20]
console.log("Bài 32")
function insertNumber(a, k) {
    a.push(k)
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] < a[i - 1]) {
            var temp = a[i]
            a[i] = a[i - 1]
            a[i - 1] = temp
        }
    }
    return a
}

// function insertNumber(a, k) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] < k) {
//             a.splice(i, 0, k)
//         }
//     }
//     return a
// }
var k = [1, 3, 6, 9, 11, 20]
console.log(k)
console.log(insertNumber(k, 13))
console.log("")

// 33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]
console.log("Bài 33")
var arr = [9, 8, 7, 6, 4, 5, 3, 2, 1]
function mySort(a) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}
console.log(arr)
console.log(mySort(arr))
