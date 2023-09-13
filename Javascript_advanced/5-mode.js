function changeMode(size, weight, transform, background, color) {
  return function() {
    const body = document.body; // document.bodyプロパティで直接body要素にアクセス
    body.style.fontSize = size + 'px'; // CSSプロパティ名は JavaScriptではキャメルケース
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // bodyにparagraphを追加
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  // bodyにSpooky用buttonを追加
  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  document.body.appendChild(spookyButton);
  spookyButton.addEventListener('click', spooky);
  
  // bodyにdark Mode用buttonを追加
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';
  document.body.appendChild(darkModeButton);
  darkModeButton.addEventListener('click', darkMode);

  // bodyにscream Mode用buttonを追加
  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
  document.body.appendChild(screamModeButton);
  screamModeButton.addEventListener('click', screamMode);
}

main();