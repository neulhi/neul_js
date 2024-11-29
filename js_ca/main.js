const navToggler = document.querySelector('.navbar-toggler');
const listGroup = document.querySelectorAll('.list-group');

navToggler.addEventListener('click', () => {
  listGroup[0].classList.toggle('show');
});

const openModalBtn = document.querySelector('#testBtn');
const modalDiv = document.querySelectorAll('div');

openModalBtn.addEventListener('click', () => {
  modalDiv[0].classList.add('show-modal');
});

const modal = document.querySelector('.black-bg');
const closeModalBtn = document.querySelector('#close');

modal.addEventListener('click', (event) => {
  if (event.target.closest('#close')) {
    modal.classList.remove('show-modal');
  }
});

function handleInput() {
  const form = document.querySelector('#loginForm');

  form.addEventListener('submit', (event) => {
    const emailInput = document.querySelector('#email').value.trim();
    const passwordInput = document.querySelector('#password').value.trim();

    // console.log(`Email Input: "${emailInput}"`);

    if (emailInput === '') {
      alert('아이디를 입력하세요');
      event.preventDefault(); // 폼 제출 막기
    } else if (passwordInput === '') {
      alert('비밀번호를 입력하세요');
      event.preventDefault();
    } else if (passwordInput.length < 6) {
      alert('6자 이상 입력하세요');
      event.preventDefault();
    }
  });
}

// 함수 실행
handleInput();

function numberGame(num) {
  if (num % 9 == 0) {
    console.log('박수x2');
  } else if (num % 3 == 0) {
    console.log('박수');
  } else {
    console.log('통과');
  }
}

// numberGame(18);

function _numberGame(num) {
  if (num % 3 === 0 || num % 6 === 0 || num % 9 == 0) {
    console.log(`${num}: 박수`);
  } else {
    console.log('통과');
  }
}
// _numberGame(12);

function testPass(a, b) {
  if (a > 100 && b > 100) {
    // alert('각 인자의 값은 100 이하의 숫자를 입력해주세요');
    console.log('각 인자의 값은 100 이하의 숫자를 입력해주세요');
  } else if (a < 40 || b < 40) {
    console.log('불합격');
  } else if (a + b >= 120) {
    console.log('합격');
  } else {
    console.log('불합격');
  }
}
// testPass(70, 70);
// testPass(30, 100);
// testPass(50, 50);
// testPass(150, 150);

/* -------------------------------- DarkMode -------------------------------- */
{
  // badge 클릭 횟수가 홀수면 내부 글자를 Light로 변경
  // badge 클릭 횟수가 짝수면 내부 글자를 Dark로 변경
}

let count = 0;
const badge = document.querySelector('.badge');

function handleDarkMode() {
  badge.addEventListener('click', () => {
    count++;
    console.log(count);

    // if (count % 2 === 0) {
    //   badge.innerHTML = 'Dark';
    // } else if (count % 2 !== 0) {
    //   badge.innerHTML = 'Light';
    // }

    badge.innerHTML = count % 2 === 0 ? 'Dark 🔄' : 'Light 🔄';
  });
}

handleDarkMode();

let credit = 60000;
let futureCredit = 0;

if (credit >= 50000) {
  futureCredit = credit * 1.2 * 1.2;
} else {
  futureCredit = credit * 1.15 * 1.15;
}
// console.log(futureCredit);
// console.log(credit);

let first = 360;
let total = 0;

total = first + (first * 2) / 3 + (((first * 2) / 3) * 2) / 3;
let _total = Math.round(first * (1 + 2 / 3 + (2 / 3) ** 2));
// console.log(total);
// console.log(_total);

let answerInput = document.querySelector('#answer');
let answerButton = document.querySelector('#send-answer');
let countInput = 0;

function handleAnswerInput() {
  countInput++;

  if (answerInput.value === '1335') {
    console.log('성공');
  } else if (countInput >= 3 && answerInput.value !== '1335') {
    console.log('아닌데~');
  }
}

answerButton.addEventListener('click', handleAnswerInput);

// let _count = 0;

// document.querySelector('#send-answer').addEventListener('click', function () {
//   _count += 1;
//   let 유저답안 = document.querySelector('#answer').value;
//   if (유저답안 == '1335') {
//     alert('성공');
//   } else if (_count >= 3 && 유저답안 != '1335') {
//     alert('멍청아');
//   }
// });

// setTimeout(() => console.log('까꿍'), 1000);

let timer = document.querySelector('#num5');
let timerWrap = document.querySelector('#num5-wrap');
let count5 = 5;

function timerSec5() {
 let interval = setInterval(() => {
    if (count5 >= 0) {
			timer.innerHTML = count5; // 타이머 업데이트
      count5--;
    } else {
			clearInterval(interval) // 타이머 멈춤
			timerWrap.style.display = 'none'; // 타이머 래퍼 숨기기
		}
  }, 1000);
}

// timerSec5();



