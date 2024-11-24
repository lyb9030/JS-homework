/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// data.js 불러오기
// import { data } from "../js/data.js"; // 왜 이거 입력하면 안되지? 모르겠네
const data = [
  {
    color: ["#ff6a00", "#720400"],
    name: "EMBER",
    alt: "엠버 포스터",
    id: 1,
  },
  {
    color: ["#1ca9f8", "#000054"],
    name: "WADE",
    alt: "웨이드 포스터",
    id: 2,
  },
  {
    color: ["#98d00f", "#002906"],
    name: "CLOD",
    alt: "클로드 포스터",
    id: 3,
  },
  {
    color: ["#d968e6", "#30003c"],
    name: "GALE",
    alt: "게일 포스터",
    id: 4,
  },
];

//------------------------ 코드 재작성

// 이벤트 위임
// $(".nav").on("click", "li", function (e) {
//   e.preventDefault();

//   const index = $(this).attr("data-index");

//   $(".nav > li").removeClass("is-active");
//   $(this).addClass("is-active");

//   $(".visual img").attr({
//     src: `./assets/${data[index - 1].src}`,
//     alt: data[index - 1].alt,
//   });
// });

// // 메인 이미지 잡아주기
// const mainImg = document.querySelector(".visual img");
// // 서브 이미지 (하단 4개) 잡아주기
// const subImg = document.querySelectorAll(".nav img");

// // 클릭 이벤트 로 sub 이미지를 클릭 하였을 때, 메인 이미지로 변경
// subImg.forEach((subImg) => {
//   subImg.addEventListener("click", () => {
//     mainImg.src = subImg.src;
//     // "src" =  `../assets/${data[index-1].src}`;
//     // "alt" = `${data[index-1]}`
//   });

//------------------------ 코드 재작성

// // html class name 가져오기
const container = document.querySelector("div.container");
console.log(container);

const nickName = document.querySelector("h1.nickName");
console.log(nickName);

const main = document.querySelector("div.visual");
console.log(main);

const sub = document.querySelector("nav");
console.log(sub);

// // Data를 사용해 작은 이미지 추가
// // data.forEach((data, index) => {
// //   const nav = document.createElement("img");
// //   nav.src = data.image;
// //   nav.alt = data.alt;
// //   nav.dataset.index = index;
// //   Container.appendChild(nav);
// // });

// // event 설정하기

// container.addEventListener("click", (e) => {
//   const target = e.target;

//   if (target.tagName === "IMG") {
//     const data = data[target.dataset.index];
//     target.src = `../assets/${data.name}.jpeg`;
//     target.alt = data.alt;
//     name.textContent = data.name;
//   } else {
//     alert("코드가 틀렸습니다. 다시 시도해 주세요");
//   }
// });

// 이벤트 핸들러 설정
container.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "IMG") {
    const data = data[target.dataset.index];

    // 메인 이미지 변경
    // target.src = ./assets/${data.name}.jpeg;
    visual.src = `../assets/${data}.jepg`;
    // target.alt = data.alt;
    visual.alt = data.alt;

    // 텍스트 변경
    // target.textContent = data.name;

    nickName.textContent = data.name;

    // 배경색 변경
    //  elem.style.background = linear-gradient(to bottom, 'colorA','colorB');
    // document.body.style.background = linear-gradient(to bottom, ${data.colors.colorA}, ${data.colors.colorB});
  }
});

//------------------------ 코드 재작성

// const sub = document.querySelector("nav");
// // getElementById -> id 값 잡아주기 / querySelector -> class 값 잡아주기
// console.log(sub); // -> ul 속 li 값으로 잡힘

// function handler(e) {
//   e.preventDefault();

//   const target = e.target.closet("li");
//   const list = [...this.children];

//   if (!target) return;

//   const index = target.dataset.index;

//   list.forEach((li) => li.classList.remove("is-active"));

//   img.src = `../assets/${data[index - 1].src}`;
//   img.alt = data[index - 1].alt;

//   target.classList.add("is-active");
// }

// sub.addEventListener("click", handler);
