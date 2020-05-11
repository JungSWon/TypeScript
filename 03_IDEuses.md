# IDE 활용 

##  Visual Studio Code 

###  Compiler 
- VSCode에 컴파일러가 내장되어있음
- 내장된 컴파일러 버전은 VSCode 업데이트시 함께 업데이트
- 그래서 컴파일러 버전과 VSCode 버전은 상관 관계가 있음
- 내장된 컴파일러 or 직접 설치한 컴파일러 선택가능 

### tsLint 
- 코딩 컨벤션을 맞추는데 도움을 준다. 
- `$ npm i typescript tslint` (로컬, 프로젝트 폴더 안에서) : node_modules에 뭔가 많이 채워진다.
- `$ ./node_modules/.bin/tslint --init` : `tslint.json` 이 생성된다.  
- ext install tslint : VSCode Extensoins 에서 tslint 플러그인 설치

- 설치 완료 후 `.ts` 파일을 보면 빨간 줄이 죽죽 그어져 있다. `tslint.json` 에서 컨벤션 허용 옵션을 추가하거나 변경하여 프로젝트 팀내/사내 컨벤션 룰에 따라 적용할 수 있다.  
  
- 참고 1. https://marketplace.visualstudio.com/items?itemName=eg2.tslint
- 참고 2. https://palantir.github.io/tslint/


## ItelliJ IDEA 
- preperence에서 Node interpreter 를 지정해야 함
- 타입스크립트 컴파일러를 지정해야 함
- 내장 or 설치된 타입스크립트 컴파일러 중 선택
- `Use TypeScript Service` 선택 
- 컴파일 오류 체크 기능
- 코드 완성 등 헬퍼 기능 
- `Enable TypeScript Compiler`를 설정하여 컴파일
- gulp와 같은 task runner를 따로 쓰지 않아도 됨
- 참고. https://www.jetbrains.com/help/idea/2017.1/auto-completing-code.html