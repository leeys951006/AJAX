const a = `https://apis.data.go.kr/6300000/eventDataService/eventDataListJson
?
serviceKey
=
C0P5uHN2AgSUtpQedKDEFLDGyJANoWKsRUDDDypPy6t6NACzgaUALXRIQSbaqKYBwcn6G%2B14pZh%2BR2H6zgAKEw%3D%3D&`;

const b = 'endpoin 주소' + '주소값';

const endPoin = 'http://apis.data.go.kr/6300000/eventDataService';

const keyName = `C0P5uHN2AgSUtpQedKDEFLDGyJANoWKsRUDDDypPy6t6NACzgaUALXRIQSbaqKYBwcn6G%2B14pZh%2BR2H6zgAKEw%3D%3D`;
const example = `
http://apis.data.go.kr/6300000/eventDataService/eventDataListJson
?
serviceKey=${keyName}
&
numOfRows=10
&
pageNo=1
`;

console.log(example);
