// ========================================================
// Assignment 5: JavaScript Post and Reply
// ========================================================

window.onload = setupFunction;

// ตัวแปรนับลำดับการโพสต์
let postCount = 0;

function setupFunction() {

    // กำหนดหัวข้อของหน้าเว็บ
    document.getElementById("top").innerHTML = "Welcome to the Forum";

}

function postFunction() {

    // อ่านข้อความจาก textarea
    let message = document.getElementById("message").value;

    // ครั้งที่ 1 -> topic
    if (postCount == 0) {
        document.getElementById("topic").innerHTML = message;
    }

    // ครั้งที่ 2 -> reply1
    else if (postCount == 1) {
        document.getElementById("reply1").innerHTML = message;
    }

    // ครั้งที่ 3 -> reply2
    else if (postCount == 2) {
        document.getElementById("reply2").innerHTML = message;
    }

    // เคลียร์ textarea
    document.getElementById("message").value = "";

    // เพิ่มจำนวนโพสต์
    postCount++;

}

function clearFunction() {

    // ล้าง topic
    document.getElementById("topic").innerHTML = "";

    // ล้าง reply1
    document.getElementById("reply1").innerHTML = "";

    // ล้าง reply2
    document.getElementById("reply2").innerHTML = "";

    // ล้าง textarea
    document.getElementById("message").value = "";

    // รีเซ็ตจำนวนโพสต์
    postCount = 0;

}