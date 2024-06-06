# HOOPS 프로젝트
<img width="100%" alt="스크린샷 2024-06-06 오후 9 40 28" src="https://github.com/hoops-project/frontend/assets/138990007/0c60db6c-25df-4af3-9120-7b187e49b10e">


농구에 의한 , 농구를 위한 농구경기 서비스, **🏀 HOOPS 🏀**입니다. 

</br>

## 목차

## [1.프로젝트 기간](#프로젝트-기간)

## [2.사용 기술 스택](#사용-기술-스택)

## [3.주요 기능](#주요-기능)

## [4.트러블 슈팅](#트러블-슈팅)

## [5.프로젝트 아키텍처](#프로젝트-아키텍처)

</br>
</br>

## 프로젝트 기간

📍 2024.04.18 ~ 2024.05.30 📍
</br>
</br>

- 1주차: 프로젝트 기획, 와이어프레임 제작
- 2주차: front-end init setting, 공통 컴포넌트 UI 생성
- 3주차: UI 구현, 사용자 맟 일정 mock API 연동
- 4주차: 채팅 기능 / 소셜로그인 구현 및 기타 세부 UI 정리 및 수정
- 5주차: 백&프론트 연동 및 리팩토링 오류 버그 수정
- 6주차: 백&프론트 연동 및 리팩토링 오류 버그 수정

</br>
</br>

## 팀원 
|  🛠️ FE 오신웅 🛠️      |  🛠️ FE 이솔 🛠️                                         |
|--------------------------|-----------------------------------------------|
|<img width="200px" src="https://github.com/hoops-project/frontend/assets/138990007/686853d5-80c3-4e6b-b792-b5c2bef4a27e"/>|<img width="200px" src="https://github.com/hoops-project/frontend/assets/138990007/e0e5c1a6-63c3-4db2-9919-9968d31b0403"/>|

## 사용 기술 스택 

### Front-End

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Type Script-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <br>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/React router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/zustand-3578E5?style=for-the-badge&logo=zustand&logoColor=white">
<br>
<img src="https://img.shields.io/badge/socket.js-010101?style=for-the-badge&logo=socket.js&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<br>
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">


### Collaboration Tool

<img src="https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">

<br>

## 주요 기능

|  🏀 회원가입 및 이메일 인증 🏀      |  🏀 카카오톡 로그인 🏀                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/SamCoMo/DBZ-Front-End/assets/138990007/77702b10-9e95-4d81-85e8-3c13f4c0e2af"/>|<img width="450px" src="https://github.com/SamCoMo/DBZ-Front-End/assets/138990007/3f2e80a6-d1e9-4050-81d5-293bb89ab5ec"/>|
|🔅 회원가입 후 이메일 인증을 통해 더 안전하게 사용할 수 있어요 🔅|🔅 카카오톡 로그인을 하여 더욱 간단하게 로그인이 가능해요 🔅|

|  🏀 경기 생성 🏀      |  🏀 경기 필터링 🏀                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/b0888cb1-98a4-4bdb-b658-6054b1b4348e"/>|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/abd49608-a47d-499d-ad96-28c879fb56e9"/>|
|🔅 경기 일정을 생성하고 팀원을 모집할 수 있어요 🔅|🔅 지역, 성별, 실내외, 경기형식 등을 선택해서 경기를 볼 수 있어요 🔅|

|  🏀 경기 초대 및 수락 🏀      |  🏀 경기 신청 및 수락 🏀                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/27644677-eb89-4094-8f78-84d8ea8b6a92"/>|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/96a1aa94-ae89-4ab0-b08f-bb8214880360"/>|
|🔅 경기에 친구를 초대하고 수락할 수 있어요 🔅|🔅 참가하고 싶은 경기에 신청을 하고 수락할 수 있어요 🔅|

|  🏀 매너 점수 평가 🏀      |  🏀 블랙리스트 🏀                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/e9c38a8d-5ec7-4828-9c2d-3455179a7f4d"/>|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/5d0956b6-0d1d-4765-bff1-4980b1685734"/>|
|🔅 경기에 참여했던 팀원의 매너점수를 평가할 수 있어요 🔅|🔅 비매너인 사용자를 신고할 수 있어요 🔅|

|  🏀 친구 검색 및 친구신청 🏀      |  🏀 채팅 🏀                                         |
|--------------------------|-----------------------------------------------|
|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/944122a7-917a-42bb-a3a9-76b6244489b1"/>|<img width="450px" src="https://github.com/hoops-project/frontend/assets/138990007/294cecb7-8f8e-455d-aa45-8799b625ac9f"/>|
|🔅 친구를 검색하고 친구신청을 할 수 있어요 🔅|🔅 경기에 참가하는 팀원들끼리 채팅할 수 있어요 🔅|

<br>

## 트러블 슈팅

#1
</br>
</br>
<img width="100%" src="https://github.com/hoops-project/frontend/assets/138990007/43d04488-043f-4a40-9be1-2cfec3382ac1"/>
</br>
</br>
카카오 로그인 시도 후 redirect될 때 , 사용자 정보와 인가 토큰 등을 한번에 받아오려 했으나 해당 정보들이 화면에 뿌려지게 구현된 것이 아니라 정보만이 화면에 나오게 되는 오류가 발생.
이에 새로운 콜백 페이지를 만들고 , 정보를 한번에 받는 방식이 아니라 기본적으로 많이 사용하는 방식인 파라미터 형식으로 오는 code 값을 다시 백엔드에 전해 주고 이후 토큰을 받아 와서 화면이 리다이렉트 될 수 있도록 로직을 다시 재구성!
</br>
</br>
#2
</br>
</br>
리액트 프로젝트에서 SockJS를 사용할 때 글로벌 객체에 접근하려고 하면 아래와 같은 오류가 발생
<img width="50%" alt="스크린샷 2024-06-06 오후 11 31 03" src="https://github.com/hoops-project/frontend/assets/138990007/c30160aa-0e4f-4567-8f91-6a8ff24ed754">
</br>
</br>
처음에는 코드 문제인 줄 알고 여러 가지 방법을 시도해보았지만 실패했습니다. 콘솔에 어떠한 에러 메시지도 출력되지 않아 원인 파악 이 안됐다.
결국 여러 정보를 찾아보던 중 이 문제가 브라우저와 Node.js 환경 차이 때문이라는 것을 알게 됨!
SockJS는 Node.js 환경을 위해 만들어져 전역 객체로 global을 사용하지만, 브라우저에서는 window가 전역 객체이기 때문! 따라서 Vite 설정 파일에서 global을 window로 매핑!
</br>
</br>
<img width="50%" alt="스크린샷 2024-06-06 오후 11 31 12" src="https://github.com/hoops-project/frontend/assets/138990007/8b6bbf59-6d1a-4e75-ba6c-fc26c0080043">
</br>
</br>


## 프로젝트 아키텍처

<img width="100%" alt="스크린샷 2024-06-06 오후 11 39 47" src="https://github.com/hoops-project/frontend/assets/138990007/0ed345fc-2201-4368-9371-36bbbd3f259f">









