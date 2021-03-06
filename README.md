# π Inflearn-Clone-Backend

## π κ°μ(Summary)

μΈνλ° μΉμ±μ λ§λ€μ΄λ³΄λ ννλ‘μ νΈ

[Inflearn-clone-front repository](https://github.com/MinwooJJ/inflearn-clone-front)

---

<br />

## π― λͺ©ν(Objectives)

- ννλ‘μ νΈ λ° νμ κ²½ν
- Hard skill λ° Soft skill ν₯μ

---

<br />

## π κ°λ°κΈ°κ°(Develop period)

2021.07.05 ~ μ§νμ€

---

<br />

## π» λΌμ΄λΈλ¬λ¦¬ λ° κΈ°μ  μ€ν(Library & Stack)

- Language : Typescript
- Server : Express
- DB : MySQL
- ORM : Sequelize
- Auth : Passport
- Etc : multer, bcrypt, env, CORS, ...

---

<br />

## π ν  μΌ (Things to do)

- [ ] λ°±μλ μΈν : Typescript, Express, MySQL, Sequelize, ...
  - [ ] tsconfig.json νμΌμ μ΅μλ€ κ³΅λΆνκΈ°
- [ ] νμ΄λΈ λ° κ΄κ³ κ΅¬μνκΈ°

  - νμ΄λΈ

    - User : name, email, password
    - Lecture : name, content
    - category : name
    - hashtag : name
    - Video : name, src
    - Image : name, src
    - Review : content, rating

  - κ΄κ³
    - User(κ°μ¬) : Lecture = 1 : N
    - User(νμ) : Lecture = N : N
    - Lecture : Video = 1 : N
    - Lecture : Image = 1 : N
    - Category : Lecture = 1 : N
    - Lecture : Hashtag = N : N
    - Lecture : Video = 1 : N
    - Lecture : Review = 1 : N
  - [ ] models μ½λ κ΅¬ν
  - [ ] ERDλ‘ μ λ¦¬
    - ERD μ μ  νμ

- [ ] λΌμ°ν
- [ ] CI / CD ν΄ μ μ©
  - ex) Jenkins
- [ ] AWS λ°°ν¬
- [ ] λ¬Έμ μ λ¦¬
  - ex) Swagger

---

<br />

## β¨ μ£Όμ κΈ°λ₯

- λ‘κ·ΈμΈ
- κ°μ CRUD

---

<br />

## π μμ λ΄μ©

<details>
<summary>2021.07.05(Tony)</summary>

github repository μμ±

- collaborator μ΄λ
- branch protect rule μ€μ 

Readme μμ±

package λ€μ΄<br />
npm install -g typescript : typescript μ€μΉ<br />
tsc --init : typescript μ€μ νμΌ μμ±(tsconfig.json)<br />
tsconfig.json μμ 

npm install --save-dev nodemon ts-node<br />
npm install @types/express<br />
npm i -D @types/node<br />
npm i typescript<br />
npm i express // μ΄κ² λλ¬Έμ νμκ° λ λ¦Ό, Javascript λ²μ μ΄ μ νμνκ±°μ§?

git checkout -b dev

- devλΌλ λΈλμΉλ₯Ό λ§λ€κ³  κ·Έ λΈλμΉλ‘ μ€μμΉ­

μ°Έκ³ λ¬Έν

- [typescriptμ μ¬μ©ν΄ express μΈν](https://hckcksrl.medium.com/typescript-%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-express-node-js-%EC%84%B8%ED%8C%85-12bbdd62513f)
- [Typescript-express-nojsμ€μ ](https://velog.io/@y1andyu/TypeScript-Express-node.js-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [ts-node κ΄λ ¨ μλ¬](https://stackoverflow.com/questions/44764004/ts-node-is-not-recognized-as-an-internal-or-external-command-operable-program)

</details>

<details>
<summary>2021.07.06(Tony)</summary>

- mysql, sequelize μ€μΉ

- npm install --save cors dotenv
- npm install --save-dev @types/cors

  - μ΄μ  μ€μΉν λΌμ΄λΈλ¬λ¦¬ μΈ μΆκ°λ‘ νμν λΌμ΄λΈλ¬λ¦¬λ€ μ€μΉ
  - cors, @types/cors : CORS λΌμ΄λΈλ¬λ¦¬

- npm install --save mysql2 sequelize sequelize-cli

  - mysql2 : λΈλμ mysqlμ μ°κ²°μμΌμ£Όλ λλΌμ΄λ²

- npx sequelize-cli init

  - config, models, migration, seeder κ°κ°μ dir μμ±
  - config : sequelize μ€μ 
  - models : DB models - table, relationship μ§μ 
  - seeder :

- sequelize config

- models DB Table, relationship

### μ°Έκ³  λ¬Έν

- [NodeJS-Express-Typescriptλ‘ Sequelize νκ²½ κ΅¬μΆ](https://velog.io/@dlawogus/NodeJS-Express-Typescript%EB%A1%9C-Sequelize%ED%99%98%EA%B2%BD%EA%B5%AC%EC%B6%95)
- [npm @type/cors](https://www.npmjs.com/package/@types/cors)
- [ts-nodebird](https://github.com/ZeroCho/ts-nodebird)
- [sequelize-typescript κ³΅μλ¬Έμ](https://sequelize.org/master/manual/typescript.html)
</details>

<details>
<summary>2021.07.07(Gaic4o)</summary>

`config`

- λΆλΆ type μ μ.

`models`

1. comment(λκΈ)
2. image(μ΄λ―Έμ§ νμΌ)
3. post(κ²μκΈ)
4. user(μ μ )
5. video(λΉλμ€)

`passport`

1. index.ts (λ§λ€μ΄ λκΈ°)
2. kakao.ts (μΉ΄μΉ΄μ€ λ‘κ·ΈμΈ)
3. local.ts (λ‘μ»¬ λ‘κ·ΈμΈ)

`routes`

1. middleware.ts (λ‘κ·ΈμΈ λμ)
2. post.ts (κ²μκΈμ κ΄λ ¨ λ λΌμ°ν°)
3. user.ts (μ μ μ κ΄λ ¨ λ λΌμ°ν°)
</details>

<details>
<summary>2021.07.08(Tony)</summary>

### config/config.ts

type IConfig -> Config

- Iλ interfaceλ₯Ό λͺμνκΈ° μν΄ λΆμ΄λ―λ‘ μμ 

IConfigGroupμ κ°μ dotenv λ₯Ό μ¬μ©νμ¬ λΉκ³΅κ°

- PASSWORDκ°μ κ²μ νλμ½λ©μ μ§μ
- λ―Όμλκ³Ό λ΄ local db μ΄λ¦μ΄ λ€λ₯΄λ―λ‘ μ λΆ dotenv νμΌμ λ£μ΄μ μ¬μ©

models/user.ts

- userId -> email : column λͺ λ³κ²½

models/post.ts -> lecture.ts νμΌλͺ λ³κ²½

- UserId : number -> column μ­μ  : λμ€μ νμνλ©΄ μΆκ°ν  μμ 

models/comment.ts -> review.ts νμΌλͺ λ³κ²½

### λ¬Έμ μ 

dbμ°κ²°μ΄ μλλ μ€

- ConnectionError [SequelizeConnectionError]: Unknown database 'inflearn-clone'
- Error: Unknown database 'inflearn-clone'
- λ¬Έμ  ν΄κ²°μ μν λΈλ ₯
  - sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  - DB μ°κ²° ν μ°κ²°νλ €λ databaseμ μ΄λ¦κ³Ό μΌμΉνλκ² μμΌλ©΄ λ§λ€κ² ν¨
    - μμ§ ν΄κ²° μλ¨

</details>

<details>
<summary>2021.07.09(Tony)</summary>

### DBμ°κ²° λ¬Έμ 

MySQLμμ SCHEMA == DATABASE

DB μ°κ²°λ¬Έμ  ν΄κ²° μ€

- SHOW GLOBAL VARIABLES LIKE 'PORT'; -> mysql μ μ ν νμΈ 3306
- mysql ν°λ―Έλλ‘ μ§μ  μ μν΄μ μλμΌλ‘ DBμμ±
  - https://carpet-part1.tistory.com/317
  - CREATE DATABASE (dbname)
    - dbname : inflearn-cloneμΌλ‘ νλκΉ μμ± μλ¨
      - inflearnμΌλ‘ μμ±
- μ°κ²° λ¬Έμ  ν΄κ²° λ¨

### eslint rule μμ 

```json
    "lines-between-class-members": [
      "error",
      "always",
      { "exceptAfterSingleLine": true }
    ]
```

### sequelize with Typescript

#### strict type-checking

```typescript
interface UserAttributes {
  id: number;
  email: string;
  nickName: string | null;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public email!: string;
  public nickName!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
```

#### usage without strict types for attributes

```Typescript
class User extends Model {
  public id!: number;
  public email!: string;
  public nickName!: string;
  public password!: string;
}
```

userμλ§ strictμΌλ‘ μ μ©ν΄λ³΄κ³  λμ€μ λ¬΄μ¨ μ°¨μ΄κ° μλμ§ νμΈν΄λ³΄μ.

</details>
