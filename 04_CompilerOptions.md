# Compiler Options 설정 

## 최상위 프로퍼티 
> JSON 오브젝트 하나의 덩어리 중 최상단의 프로퍼티를 말함 

###  compileOnSave 
- true/false (default : false)
- 파일을 저장하면 자동으로 컴파일 되는지 여부 
- Visual Studio 2015 with TypeScript 1.8.4 이상을 쓰면 true로 해놨을때 자동으로 해준다. 
- atom-typescript 플러그인을 다운받았을때, 자동으로 해준다. 

### extends 
- 파일(상대) 경로명 : string 
- 사용 예 ) 클라이언트 레벨과 서버사이드 레벨의 타입스크립트 설정이 일정수준 비슷하다면, 한 파일을 만들어놓고 상속받아서 작은 부분만 바꿔서 사용하도록 해준다. 

### fils 
- 설정이 없다면 전부다 컴파일 
- 상대/절대 경로의 리스트 배열 
- exclude 보다 강력 : 특정 폴더를 exclude해놔도 files에 포함되어 있다면 포함
   
### include
- 설정이 없다면 전부다 컴파일 
- glob 패턴 (.gitignore와 유사)
- exclude보다 약함 
- 디폴트로 `.ts`, `.tsx`, `.d.ts` 만 
  + 만약 다른 확장자를 포함하고 싶다면, allowJS 옵션 활용
  + 하지만 잘 안한다.  
  
### exclude 
- glob 패턴
- 설정이 없다면 `node_modules`, `bower_components`, `jspm_packages`, `<outDir>` 를 제외 
-  `<outDir>`은 include 설정해도 항상 제외 

### compileOptions 
- 가장 많다 
- `./04_01_ex_compileOptions.json` 참고하자 
- 그 중 가장 중요한 옵션은 `type` 
- ``` json
  {
    "type": "object",
    "description": "Instructs the TypeScript compiler how to compile .ts files.",
    "properties": {
        "typeRoots": {
            "description": "Specify list of directories for type definition files to be included. Requires TypeScript version 2.0 or later.",
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "types": {
            "description": "Type declaration files to be included in compilation. Requires TypeScript version 2.0 or later.",
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
}```

#### @types 
- TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템 패키지
- 아무 설정을 안하면 ?
    + `node_modules/@types` 라는 모든 경로를 찾아서 사용
- typeRoots 를 사용하면 ?
    + 배열 안에 들어있는 경로들 아래서만 가져옴
- types 를 사용하면 ?
    + 배열 안의 모듈 혹은 `./node_modules/@types/` 안의 모듈 이름에서 찾아옴
    + `[]` 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 뜻
- typeRoots 와 types 를 함께 사용하지 않음

#### @target 
- 내가 컴파일해서 어떤 버전의 자바스크립트를 얻을 것인가
- 디폴트는 ES3 

#### @lib
- 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
- lib 를 지정하지 않을 때,
    + `target` 이 `'es3'` 라면, `lib.d.ts` 가 디폴트
    + `target` 이 `'es5'` 라면, `dom`, `es5`, `scripthost` 가 디폴트
    + `target` 이 `'es6'` 라면, `dom`, `es6`, `dom.iterable`, `scripthost` 가 디폴트
- lib 를 지정하면 그 lib 배열로만 라이브러리를 사용
    + ​빈 `[]` => 'no definition found 어쩌구'


#### @outDir
- 소스디렉토리에 있는 구조를 그대로 받으려고 할때 사용
- `./04_02_ex_outDir_outFile.json` 참고 

#### @outFile
- 컴파일된 하나의 파일로 받으려고 할때 사용 
- `./04_02_ex_outDir_outFile.json` 참고 
  
#### @module
- 모듈 시스템 선택
- `./04_03_ex_module.json` 참고
- 컴파일 된 모듈의 결과물을 어떤 모듈 시스템으로 할지 결정
- `target` 이 `'es6'` 이면 `es6` 가 디폴트이고,
- `target` 이 `'es6'` 가 아니면 `commonjs` 가 디폴트
- `AMD` 나 `System` 을 사용하려면, `outFile` 지정 필수 
- `ES6` 나 `ES2015` 를 사용하려면, `target` 이 `es5` 이하여야 함

#### @moduleResolution
- 다른 ts소스에서 모듈을 가져다(import) 사용할 때, 어떤 시스템을 쓸건지 결정
- ts소스에서 모듈을 사용하는 방식을 지정해야 함
- `Classic` or `Node` 둘 중 하나
- `CommonJS` 일때만 `Node` 라고 생각하면 됨
- 그래서 보통은 신경쓰지 않아도 되는 옵션 

#### @paths 와 @baseUrl
- 폴더를 임포트할때 
- 보통 상대경로를 쓰지만, 동떨어져있는 파일을 임포트 할때 `baseUrl` 사용 
- 즉, `baseUrl`로 꼭지점과 `paths` 안의 키/밸류로 모듈을 가져가는 방식

#### rootDirs 
- 배열 안에서 상대 경로를 찾는 방식