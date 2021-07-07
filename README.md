# 📚 Inflearn-Clone-Backend

## 📖 개요(Summary)

인프런 웹앱을 만들어보는 팀프로젝트

[Inflearn-clone-front repository](https://github.com/MinwooJJ/inflearn-clone-front)

---

<br />

## 🎯 목표(Objectives)

- 팀프로젝트 및 협업 경험
- Hard skill 및 Soft skill 향상

---

<br />

## 📆 개발기간(Develop period)

2021.07.05 ~ 진행중

---

<br />

## 💻 라이브러리 및 기술 스택(Library & Stack)

- Language : Typescript
- Server : Express
- DB : MySQL
- ORM : Sequelize
- Auth : Passport
- Etc : multer, bcrypt, env, CORS, ...

---

<br />

## 📑 할 일 (Things to do)

- [ ] 백엔드 세팅 : Typescript, Express, MySQL, Sequelize, ...
  - [ ] tsconfig.json 파일의 옵션들 공부하기
- [ ] 테이블 및 관계 구상하기

  - 테이블

    - User : name, email, password
    - Lecture : name, content
    - category : name
    - hashtag : name
    - Video : name, src
    - Image : name, src
    - Review : content, rating

  - 관계
    - User(강사) : Lecture = 1 : N
    - User(학생) : Lecture = N : N
    - Lecture : Video = 1 : N
    - Lecture : Image = 1 : N
    - Category : Lecture = 1 : N
    - Lecture : Hashtag = N : N
    - Lecture : Video = 1 : N
    - Lecture : Review = 1 : N
  - [ ] models 코드 구현
  - [ ] ERD로 정리
    - ERD 선정 필요

- [ ] 라우팅
- [ ] CI / CD 툴 적용
  - ex) Jenkins
- [ ] AWS 배포
- [ ] 문서 정리
  - ex) Swagger

---

<br />

## ✨ 주요 기능

- 로그인
- 강의 CRUD

---

<br />

## 📗 작업 내용

<details>
<summary>2021.07.05(Tony)</summary>

github repository 생성

- collaborator 초대
- branch protect rule 설정

Readme 작성

package 다운<br />
npm install -g typescript : typescript 설치<br />
tsc --init : typescript 설정파일 생성(tsconfig.json)<br />
tsconfig.json 수정

npm install --save-dev nodemon ts-node<br />
npm install @types/express<br />
npm i -D @types/node<br />
npm i typescript<br />
npm i express // 이것 때문에 한시간 날림, Javascript 버전이 왜 필요한거지?

git checkout -b dev

- dev라는 브랜치를 만들고 그 브랜치로 스위칭

참고문헌

- [typescript을 사용해 express 세팅](https://hckcksrl.medium.com/typescript-%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-express-node-js-%EC%84%B8%ED%8C%85-12bbdd62513f)
- [Typescript-express-nojs설정](https://velog.io/@y1andyu/TypeScript-Express-node.js-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [ts-node 관련 에러](https://stackoverflow.com/questions/44764004/ts-node-is-not-recognized-as-an-internal-or-external-command-operable-program)

</details>

<details>
<summary>2021.07.06(Tony)</summary>

- mysql, sequelize 설치

- npm install --save cors dotenv
- npm install --save-dev @types/cors

  - 어제 설치한 라이브러리 외 추가로 필요한 라이브러리들 설치
  - cors, @types/cors : CORS 라이브러리

- npm install --save mysql2 sequelize sequelize-cli

  - mysql2 : 노드와 mysql을 연결시켜주는 드라이버

- npx sequelize-cli init

  - config, models, migration, seeder 각각의 dir 생성
  - config : sequelize 설정
  - models : DB models - table, relationship 지정
  - seeder :

- sequelize config

- models DB Table, relationship



<summary>2021.07.06(Gaic4o)</summary>

`config`

- 부분 type 정의. 
  
`models` 

1. comment(댓글)
2. image(이미지 파일) 
3. post(게시글) 
4. user(유저)
5. video(비디오) 
  
`passport` 

1. index.ts (만들어 놓기)
2. kakao.ts (카카오 로그인) 
3. local.ts (로컬 로그인)

`routes` 

1. middleware.ts (로그인 동작)
2. post.ts (게시글에 관련 된 라우터)
3. user.ts (유저에 관련 된 라우터)


### 참고 문헌

- [NodeJS-Express-Typescript로 Sequelize 환경 구축](https://velog.io/@dlawogus/NodeJS-Express-Typescript%EB%A1%9C-Sequelize%ED%99%98%EA%B2%BD%EA%B5%AC%EC%B6%95)
- [npm @type/cors](https://www.npmjs.com/package/@types/cors)
- [ts-nodebird](https://github.com/ZeroCho/ts-nodebird)
- [sequelize-typescript 공식문서](https://sequelize.org/master/manual/typescript.html)
</details>
