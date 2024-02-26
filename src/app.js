let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class.",
  "right on time.",
  "when I finished.",
  "during my lunch.",
  "while I was praying."
];

let img = document.getElementById("pic");

function generateExcuse() {
  let randomWhoIndex = Math.floor(Math.random() * who.length);

  switchImage(randomWhoIndex);

  let excuse = `${who[randomWhoIndex]} ${
    action[Math.floor(Math.random() * action.length)]
  } ${what[Math.floor(Math.random() * what.length)]} ${
    when[Math.floor(Math.random() * when.length)]
  }`;

  let h1 = document.getElementById("excuse");
  if (h1) h1.textContent = excuse;
}

function switchImage(index) {
  switch (index) {
    case 0:
      img.src =
        "https://i.pinimg.com/564x/9e/bf/a9/9ebfa99ee766bd67f6d3101778748504.jpg";
      break;
    case 1:
      img.src =
        "https://i.pinimg.com/564x/04/3b/43/043b43f1323c75e73281e6d4298f5f39.jpg";
      break;
    case 2:
      img.src =
        "https://i.pinimg.com/564x/1e/02/de/1e02de891e7a0ee30f5c9c8f0e77474d.jpg";
      break;
    case 3:
      img.src =
        "https://i.pinimg.com/564x/f8/8b/96/f88b962d456cd3dda19a67a3cc59fb59.jpg";
      break;
  }
}

window.onload = function() {
  generateExcuse();

  setInterval(generateExcuse, 10000);
};
