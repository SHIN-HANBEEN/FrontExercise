
console.dir(document);
// dir 메소드는 객체의 속성을 출력한다. 
// log 메소드는 객체의 정보를 출력하는 것과 대비된다. 

console.log(document);

console.dir(document.childNodes);
// 현재 노드의 자식 노드 리스트를 반환한다. 
// 노드란 자료구조에서 많이 사용하는 용어이다.
// 노드는 앞의 요소와 뒤의 요소를 선으로 연결하는 구조 때문에 노드라는 이름이
// 붙었다. HTML이 body 의 부모 노드인 것이 대표적인 예시다. 

console.dir(document.childNodes[1].childNodes);
// document 의 자식 노드 중에 1번(2번째) 노드는 html 이다.
// 즉 html 의 자식 node 를 보여주는 코드이다.
