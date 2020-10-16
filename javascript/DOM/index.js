// Bài 6: Tạo 2 nút, nút thứ nhất có value = "Xanh", nút thứ hai có value = "Đỏ".

// var btnBlue = document.querySelector("#js-change-bg .js-btn-blue")
// var btnRed = document.querySelector("#js-change-bg .js-btn-red")
// btnBlue.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue"
// })
// btnRed.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red"
// })

// Bài 10: Tạo show more và showless của một đoạn text khi quá dài.
var contents = document.querySelector("div#js-show #content")
var content = contents.textContent
var btnShow = document.getElementById("js-btn-show")

if (content.length < 100) {
    contents.innerText = content
    btnShow.style.display = "none"
} else {
    btnShow.style.display = "inline"
    contents.innerText = content.slice(0, 100) + "..."
    btnShow.innerText = "Show more"
}

btnShow.addEventListener("click", function () {
    if (btnShow.textContent === "Show more") {
        contents.innerText = content
        btnShow.innerText = "Show less"
    }
    else {
        contents.innerText = content.slice(0, 100) + "..."
        btnShow.innerText = "Show more"
    }
})

// Bài 13: Làm một chiếc đồng hồ bấm giờ
var minutes = 0
var seconds = 0
var miliSeconds = 0

var stopWatch = document.querySelector("#js-stopwatch")
var btnStart = document.querySelector("#js-stopwatch .js-btn-start")
var btnStop = document.querySelector("#js-stopwatch .js-btn-stop")
var btnReset = document.querySelector("#js-stopwatch .js-btn-reset")

var changeMinute = document.getElementById("minute")
var changeSecond = document.getElementById("second")
var changeMiliSecond = document.getElementById("miliSecond")

var Interval

stopWatch.style.height = "200px"
stopWatch.style.width = "200px"
stopWatch.style.textAlign = "center"
stopWatch.style.backgroundColor = "Gainsboro"
stopWatch.style.borderRadius = "50%"
stopWatch.style.border = "5px solid black"

btnStart.addEventListener("click", function () {
    clearInterval(Interval)
    Interval = setInterval(startTime, 10)
})

btnStop.addEventListener("click", function () {
    clearInterval(Interval)
})

btnReset.addEventListener("click", function () {
    clearInterval(Interval)
    minutes = "00"
    seconds = "00"
    miliSeconds = "00"
    changeMiliSecond.innerHTML = miliSeconds
    changeSecond.innerHTML = seconds
    changeMinute.innerHTML = minutes
})

function startTime() {
    miliSeconds++
    if (miliSeconds < 9) {
        changeMiliSecond.innerHTML = "0" + miliSeconds
    }
    if (miliSeconds > 9) {
        changeMiliSecond.innerHTML = miliSeconds
    }
    if (miliSeconds > 99) {
        seconds++
        changeSecond.innerHTML = "0" + seconds
        miliSeconds = 0
        changeMiliSecond.innerHTML = "0" + 0
    }
    if (seconds > 9) {
        changeSecond.innerHTML = seconds
    }
    if (seconds > 59) {
        minutes++
        changeMinute.innerHTML = "0" + minutes
        seconds = 0
        changeSecond.innerHTML = "0" + 0
    }
}

