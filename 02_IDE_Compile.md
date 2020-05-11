# 개발환경 구축 및 컴파일러 사용 

- 런타임환경, 에디터, 컴파일러를 설치해야한다. 

##  런타임 환경
####  Node.js 
- Chrome의 V8 JavaScript Engine을 사용하여, 
- 자바스크립트를 해석하고 
- OS레벨에서 API를 제공하는 
- 서버사이드용 자바스크립트 런타임 환경
- 설치 : https://nodejs.org
- node.js version manager : nvm 또는 n(윈도우버전 없음) 설치하면 버전 이동 편리  

####  Browser
- HTML을 동적으로 만들기 위해
- 브라우저에서 자바스크립트를 해석하고 
- DOM을 제어할 수 있도록하는 자바스크립트 런타임 환경

##  IDE 에디터 환경 

#### Visual Studio Code 
- 최근 visual studio update에서는 타입스크립트 디폴트로 설치됨 
- 타입스크립트로 만들어졌기 때문에 타입스크립트 지원이 강력

#### IntelliJ IDEA / WebStorm 
- 이 두 IDE도 좋으니 한번 써보길 
- https://www.jetbrains.com/
- 특별한 플러그인 설치 필요 


## 컴파일 환경 
#### npm 
> - npm i typescript -g
> - node_modules/.bin/tsc
> - tsc source.ts

- 글로벌 인스톨 `npm i typescript -g ` 또는 
  + 이 경우 `node.js ` 안에 `typescript` 설치됨 
- 프로젝트 폴더 만들어서 접근 후 
  ` npm i typescript ` 하면 : `node_modules`의 `tsc`가 가능해진다.  
- `npm init -y`로 패키지 생성하면 : `package.json` 가 생성된다. 
- 실제로 사용하기 위해서 `tsc` 명령어를 찾아 써야 한다 : npm script에( `package.json` -> `"scripts:{}"` 부분 ) `"transpile":"tsc",`명령어를 지정해놓는다. 
  (+) 정석은 `"./node_modules/.bin/tsc"` 상대경로 이지만,  `node_modules` 내부 `.bin` 에 들어있는 명령어는 상위 경로를 안붙이고 써도 가능하다. 하지만 커맨드라인에서 사용하려면 상대경로 모두 지정해주어야 한다. `package.json`을 통해 실행되는 `npm script`가 아니니까. 


###  컴파일러 사용 
#### 기본적인 컴파일 방법
- 패키지가 설치된 폴더 안에 `test.ts` 파일 생성 
- 타입스크립트 소스코드 작성 
- 터미널에서  `"node_modules/.bin/tsc"` 실행 
- 컴파일 된 `test.js`가 생성된다. 

#### 컴파일 방법 2 
- `package.json`의 `"scripts:{"transpile" :}"`를 ` "tsc test.ts"`로 지정하고 
- 터미널에서 `npm run transpile` 명령
- 이 또한 컴파일하는 방법이다.

####  컴파일 방법 3 
-  `npm i typescript -g ` 으로 타입스크립트를 글로벌 설치했다면 
-  위 두 방법처럼 경로설정/스크립트옵션설정 필요없이
-  터미널에서 `tsc test.ts` 만으로 컴파일이 가능하다 

####  컴파일 옵션 설정 하기 
- 컴파일 할 때, JS옵션을 ES5 또는 ES6 등 어느 옵션에 맞출건지 설정하는 방법을 알아보자 
- `./04_CompilerOptions.md`에서 알아보자.


## 컴파일러 사용예제 
###  타입스크립트 컴파일러를 글로벌로 설치 한 경우 
- cli 명령어로 파일 컴파일
- 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일 
  + 터미널에서 `tsc --init` 로 초기셋팅 하면 `tsconfig.json` 생성 : 컴파일 옵션을 따로 지정하지 않았으므로 디폴트로 설정된다. 
- 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일 (watch 모드)
  + `tsc -w` 타입스크립트가 변경되면 갑지하여 새로 컴파일 해줌 

### 타입스크립트 컴파일러를 프로젝트에 설치 한 경우 
- .bin 안의 명령어로 파일 컴파일
  + `./node_modules/.bin/tsc test.ts` 
- npm 스크립트로 파일 컴파일
  + 컴파일 방법 2와 같다. 
- 프로젝트에 있는 타입스크립트 설정에 맞춰, npm 스크립트로 컴파일
  + `./node_modules/.bin/tsc`
- 프로젝트에 있는 타입스크립트 설정에 맞춰, npm 스크립트로 컴파일 (watch 모드)
  +  `package.json`의 `"scripts:{}"`에 `"devwatch": "tsc -w"`와 같이 추가하고 (변수명 설정은 자유)
  +  터미널에서 `npm run devwwatch` 실행하면 watch 모드 실행  
