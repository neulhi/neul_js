const tabContainer = document.querySelector('.list');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// 1.
// function handleClick(event) {
//   tabButtons.forEach((button) => button.classList.remove('orange') );
// 	event.target.classList.add('orange');

// 	tabContents.forEach((content) => content.classList.remove('show'));
// 	const index = Array.from(tabButtons).indexOf(event.target);
// 	tabContents[index].classList.add('show')

// }

// tabButtons.forEach((event) => {
// 	event.addEventListener('click', handleClick)
// })

// 2.
// function handleClick(event) {
//   const index = Array.from(tabButtons).indexOf(event.target);

//   // 모든 버튼과 콘텐츠 초기화
//   tabButtons.forEach(button => button.classList.remove('orange'));
//   tabContents.forEach(content => content.classList.remove('show'));

//   // 클릭한 버튼과 해당 콘텐츠 활성화
//   tabButtons[index].classList.add('orange');
//   tabContents[index].classList.add('show');
// }

// // 버튼에 이벤트 리스너 등록
// tabButtons.forEach(button => button.addEventListener('click', handleClick));

// 3.
function setActiveTab(index) {
  // 모든 버튼과 콘텐츠 초기화
  tabButtons.forEach((button) => button.classList.remove('orange'));
  tabContents.forEach((content) => content.classList.remove('show'));

  // 클릭한 버튼과 해당 콘텐츠 활성화
  tabButtons[index].classList.add('orange');
  tabContents[index].classList.add('show');
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => setActiveTab(index));
});

// 4.
// tabContainer.addEventListener('click', (event) => {
//   const clickedButton = event.target;
//   const index = Array.from(tabButtons).indexOf(clickedButton);

//   if (index !== -1) { // 클릭된 것이 버튼일 경우만 실행
//     // 모든 버튼과 콘텐츠 초기화
//     tabButtons.forEach(button => button.classList.remove('orange'));
//     tabContents.forEach(content => content.classList.remove('show'));

//     // 클릭된 버튼과 해당 콘텐츠 활성화
//     clickedButton.classList.add('orange');
//     tabContents[index].classList.add('show');
//   }
// });
