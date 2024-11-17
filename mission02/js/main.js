const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const idInput = document.querySelector("#idInput");
const pwInput = document.querySelector("#pwInput");
const btn = document.querySelector(btn - login);

idInput.addEventListener("input", function () {
  if (emailReg.test(idInput.value)) {
    idInput.classList.remove("is--invalid");
  } else {
    idInput.classList.add("is--invalid");
  }
});

pwInput.addEventListener("input", function () {
  if (pwReg.test(pwInput.value)) {
    pwInput.classList.remove("is--invalid");
  } else {
    pwInput.classList.add("is--invalid");
  }
});

btn.addEventListener("click", function () {
  if (emailReg.test(idInput.value) && pwReg.test(pwInput.value)) {
    // 성공 시 페이지 이동
    window.location.href = "welcome.html";
  } else {
    // 실패 시 에러 메시지 표시

    function SyntaxError(message) {
      return new SyntaxError("ID 혹은 PW가 틀렸어");
    }
  }
});

// 1. email 정규표현식을 사용한 validation

// 2. pw 정규표현식을 사용한 validation

// -false면 해당 input에 is--invalid 추가
// node.classList.remove("is--invalid");

// -true면 해당 input에 is--invalid 제거
// node.classList.add("is--invalid");

// -false면 해당 input에 is--invalid 추가
// node.classList.remove("is--invalid");

// -true면 해당 input에 is--invalid 제거
// node.classList.add("is--invalid");

// 3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
// value === user.id;

// 4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
// value === user.pw;

// 5. 두 값이 일치 한다면 다음 페이지 (welcome.html)로 이동
