// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================

window.onload = pageLoad;

function pageLoad() {
    const form = document.forms["myRegister"];

    if (form) {
        form.addEventListener("submit", validateForm);
    }
}

function validateForm(event) {

    // ป้องกัน form เปลี่ยนหน้าหรือ refresh ก่อน
    if (event) {
        event.preventDefault();
    }

    const form = document.forms["myRegister"];
    const errorMsg = document.getElementById("errormsg");

    // =========================================================
    // ตรวจสอบว่ากรอกข้อมูลครบทุกช่อง
    // =========================================================
    const fields = form.querySelectorAll("input");

    for (let i = 0; i < fields.length; i++) {

        // ไม่ตรวจปุ่ม submit / button
        if (
            fields[i].type !== "submit" &&
            fields[i].type !== "button" &&
            fields[i].value.trim() === ""
        ) {
            errorMsg.innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
            return false;
        }
    }

    const username = form["username"].value.trim();

    // password มี 2 ช่อง
    const passwords = form["password"];

    const password = passwords[0].value;
    const retypePassword = passwords[1].value;


    // =========================================================
    // 1. ตรวจสอบว่า Password ทั้ง 2 ช่องตรงกันหรือไม่
    // =========================================================
    if (password !== retypePassword) {
        errorMsg.innerHTML = "Password และ Confirm Password ไม่ตรงกัน";
        return false;
    }


    // =========================================================
    // 2. เคลียร์ข้อความแจ้งเตือน
    // =========================================================
    errorMsg.innerHTML = "";


    // =========================================================
    // 3. บันทึกข้อมูลลง localStorage
    // =========================================================
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);


    alert("ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login");


    // =========================================================
    // 4. ไปหน้า login.html
    // =========================================================
    window.location.href = "login.html";

    return true;
}