/**
 * jsx ?
 * 
 * Java Script Xml
 * (태그 엘리먼트로 이루어진 언어)
 * 
 * const element = <h1>hello world</h1>
 * 엘리먼트 코드를 자바스크립트 코드로 변환 <= by babel 라이브러니
 * 
 * React.creatElement(h1,null,`hello world`)
 * 
 * 1. jsx 문법 사용시 태그는 무조건 닫혀야한다
 * 2. 두 개이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야한다
 * 3. Jsx 내부에서 변수를 사용하려면 코드를 {} 로 감싸면 된다
 * 4. {} 자바 스크립트 if 조건문(x)
 *    : 삼항 연산자
 * 
 * 5. 카멜케이스 표기법
 * 
 * Virtual DOM -----> Render -----> Browser DOM
 *      JSX    -----> -----> -----> HTML
 * 
 * 엘리먼트 특징 : 
 * 
 * 불변성(Immutable)
 * 한 번 생성된 엘리먼트는 변하지 않는다 => 생성된 후 에는 속성을 변경할 수 없다
 * 따라서 엘리먼트가 변경(업데이트)을 위해서는 다시 생성해야 한다
 * 
 */
