// =============================================================================
// MDT312 Assignment 7  - Square Game
// Modern JavaScript: DOM, Event, Timer
// =============================================================================

window.onload = pageLoad;

// Global timer reference เพื่อให้สามารถควบคุมและเคลียร์สถานะได้ถูกต้อง
let timer = null;

function pageLoad() {
  // 1. ผูกเหตุการณ์คลิกปุ่ม Start
  const startBtn = document.getElementById("start");

  startBtn.onclick = startGame;

  // 2. Event Delegation
  // ผูก event ไว้ที่ #layer เพียงจุดเดียว
  const gameLayer = document.getElementById("layer");

  gameLayer.onclick = function (event) {
    // เช็คว่าสิ่งที่คลิกเป็นกล่อง square หรือไม่
    if (event.target.classList.contains("square")) {
      // ถ้าใช่ ให้ลบกล่องที่ถูกคลิก
      event.target.remove();
    }
  };
}

function startGame() {
  alert("Ready");

  clearScreen(); // ล้างกล่องเก่าออกก่อนเริ่มรอบใหม่

  addBox();

  timeStart();
}

function timeStart() {
  const TIMER_TICK = 1000;

  // เคลียร์ timer เดิมก่อนเริ่มใหม่
  if (timer !== null) {
    clearInterval(timer);

    timer = null;
  }

  const min = 0.1; // 0.1 minute = 6 seconds

  let second = min * 60;

  const clockDisplay = document.getElementById("clock");

  clockDisplay.textContent = second;

  // เริ่ม timer
  timer = setInterval(timeCount, TIMER_TICK);

  function timeCount() {
    const allbox = document.querySelectorAll("#layer div");

    // 1. ถ้าไม่มีกล่องเหลือ และยังมีเวลา
    if (allbox.length === 0 && second > 0) {
      clearInterval(timer);

      timer = null;

      alert("You win!");

      return;
    }

    // ลดเวลา
    second--;

    clockDisplay.textContent = second;

    // 2. ถ้าเวลาหมด แต่ยังมีกล่องเหลือ
    if (second <= 0 && allbox.length > 0) {
      clearInterval(timer);

      timer = null;

      alert("Game over");

      clearScreen();

      clockDisplay.textContent = 0;
    }
  }
}

function addBox() {
  // จำนวนกล่องจาก input
  const numbox = parseInt(document.getElementById("numbox").value) || 0;
  // พื้นที่เกม
  const gameLayer = document.getElementById("layer");
  // สีจาก dropdown
  const colorDrop = document.getElementById("color").value;
  for (let i = 0; i < numbox; i++) {
    const tempbox = document.createElement("div");

    // กำหนด class เช่น "square maroon"
    tempbox.className = "square " + colorDrop;

    // กำหนด id เช่น box0, box1, box2
    tempbox.id = "box" + i;

    // สุ่มตำแหน่งกล่อง
    tempbox.style.left = Math.random() * (500 - 25) + "px";

    tempbox.style.top = Math.random() * (500 - 25) + "px";

    // เพิ่มกล่องเข้าไปใน #layer
    gameLayer.appendChild(tempbox);
  }
}

function clearScreen() {
  // เลือกกล่องทั้งหมดที่อยู่ใน #layer
  const allbox = document.querySelectorAll("#layer div");

  // ลบกล่องทั้งหมด
  for (let i = 0; i < allbox.length; i++) {
    allbox[i].remove();
  }
}
