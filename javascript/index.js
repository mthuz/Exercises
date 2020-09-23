// 1. Viết chương trình in ra số từ 1 đến n
console.log("Bài 1: In ra số từ 1 đến n")
function printN(n){
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

printN(10)
console.log("");
// 2. Viết chương trình in ra các số lẻ từ 1 đến n
console.log("Bài 2: In ra các số lẻ từ 1 đến n")
function printOdd(n){
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    } 
}

printOdd(10)
console.log("");
// 3. Viết chương trình in ra các số chẵn từ 1 đến n
console.log("Bài 3: In ra các số chẵn từ 1 đến n")
function printEven(n){
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEven(10)
console.log("");
// 4. Viết chương trình in ra các số nguyên tố từ 1 đến n
console.log("Bài 4: In ra các số nguyên tố từ 1 đến n")
function printPrime(n){
    for (var i = 2; i <= n; i++) {
        isPrime = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

printPrime(10)
console.log("");
// 5. Viết chương trình tính tổng từ 1 đến n
console.log("Bài 5: Tính tổng từ 1 đến n")
function sumN(n){
    var sum5 = 0;
    for (var i = 1; i <= n; i++) {
        sum5 += i;
    }
    console.log(sum5);
}

sumN(10)
console.log("");
// 6. Viết chương trình tính tổng bình phương từ 1 đến n
console.log("Bài 6: Tính tổng bình phương từ 1 đến n")
function sumSquare(n){
    var sum6 = 0;
    for (var i = 1; i <= n; i++) {
        sum6 += i * i;
    }
    console.log(sum6);
}

sumSquare(10)
console.log("");
// 7. Viết chương trình tính tổng các số lẻ trong khoảng 1 đến n
console.log("Bài 7: Tính tổng các số lẻ trong khoảng 1 đến n")
function sumOdd(n){
    var sum7 = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum7 += i;
        }
    }
    console.log(sum7);    
}

sumOdd(10)
console.log("");
// 8. Viết chương trình kiểm tra số n có phải toàn số lẻ tạo thành hay không
console.log("Bài 8: Kiểm tra số n có phải toàn số lẻ tạo thành hay không")
function checkAllOdd(c){
    var check = true;
    console.log(c);
    while (c > 0 && check) {
        if ((c % 10) % 2 === 0) {
            check = false;
        }
        c = Math.floor(c / 10);
    }
    check ? console.log("Yes") : console.log("No");
}

checkAllOdd(13132)
console.log("");
// 9. Viết chương trình kiểm tra số n có phải là số đối xứng
console.log("Bài 9: Kiểm tra số n có phải là số đối xứng")
function findReverse(n){
    var reverse = 0;
    var rem;
    while( n != 0){
        rem = n%10
        reverse = reverse*10 + rem
        n = Math.floor(n/10)
    }
    return reverse
}

function checkSymmetry(n){
    if (n == findReverse(n)) {
        console.log(n + " is a symmetry number")
    } else {
        console.log(n + " is not a symmetry number")
    }
}

checkSymmetry(1234321)
console.log("");
// 10. Viết chương trình in ra bảng cửu chương
console.log("Bài 10: In ra bảng cửu chương")
console.log("-----BẢNG CỬU CHƯƠNG-----")
for (var i = 2; i < 10; i++) {
    console.log("-- Bảng " + i + " --");
    for (var j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + i * j);
    }
}
console.log("");

