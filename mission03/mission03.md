# 3주차 과제

## 목차

1. 작업 순서<Br>

## 1. 과제 : 영화 포스터 썸네일 작성하기

### 1. 작업순서

1. 이미지와 색상의 데이터는 data.js로 불러오기<br>

- 먼저 html에 있는 method를 불러 들여 줍니다.<br>
- 전체 container는 getElementById를 통하여 container로 설정합니다.<br>
- nickName class는 getElementById를 통하여 name으로 설정합니다.<br>
- visual class는 getElementById를 통하여 main로 설정합니다.<br>
- nav calss는 getElementById를 통하여 sub로 설정합니다.<br>

- data.js의 폴더를 export로 내보내주고, index.js 파일을 생성 후 내보내 준 파일을 한번 더 받습니다. <br>
- 그리고 main.js에서 import로 받아줍니다.<br>

2. li 항목들 (subimg)를 클릭하면 메인 이미지와 alt를 변경하기<br>

- 전체 container 중 nav class에 addEventListener 를 추가합니다.<br>
- sub 이미지 클릭시 이미지가 변경되도록 visual.src = `이미지 파일의 경로` 를 추가하여 줍니다.<br>
- alt도 동일하게 변경되도록 설정하여 줍니다.<br>

3. 변경된 이미지와 동일하게 h1의 nickName도 변경되도록 설정<br>

- nickName class에 textContent 를 data의 name으로 변경하도록 설정합니다.<br>

4. 이미지에 맞도록 배경이미지를 변경<br>

- window에서 background 부분을 잡은 후 linear-gradinet 를 입력하여 배경화면을 설정하여 줍니다.<br>
- bottom 을 입력하여, sub 이미지를 클릭하였을때 발동되게 하였으며, colorA는 data의 값을, colorB는 #000으로 설정하였습니다.<BR>
