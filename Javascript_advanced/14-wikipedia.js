function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200){
      const res = request.responseText;
      const obj = JSON.parse(res);
      // console.log(obj);
      // Object.keys()でobj.query.pagesオブジェクトのすべてのキーをリストで抽出→最初のindex21721040のextractを取得
      callback(obj.query.pages[Object.keys(obj.query.pages)[0]].extract);
    }
  }
  // CORSポリシーのエラー回避用にURL末尾に&origin=*を追加
  request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  request.send();
}

queryWikipedia(createElement);