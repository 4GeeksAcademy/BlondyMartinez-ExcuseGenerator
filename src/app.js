const WHO = ["The dog", "My grandma", "His turtle", "My bird"];
const ACTION = ["ate", "peed", "crushed", "broke"];
const WHAT = ["my homework", "the keys", "the car"];
const WHEN = [
  "before the class.",
  "right on time.",
  "when I finished.",
  "during my lunch.",
  "while I was praying."
];

const TEXT = document.getElementById("excuse");
const IMG = document.getElementById("pic");

const IMG_URL = [
  "https://i.pinimg.com/564x/9e/bf/a9/9ebfa99ee766bd67f6d3101778748504.jpg",
  "https://i.pinimg.com/564x/04/3b/43/043b43f1323c75e73281e6d4298f5f39.jpg",
  "https://i.pinimg.com/564x/1e/02/de/1e02de891e7a0ee30f5c9c8f0e77474d.jpg",
  "https://i.pinimg.com/564x/f8/8b/96/f88b962d456cd3dda19a67a3cc59fb59.jpg"
];

function generateExcuse() {
  let randomWhoIndex = Math.floor(Math.random() * WHO.length);

  switchImage(randomWhoIndex);

  if (TEXT)
    TEXT.textContent = `${WHO[randomWhoIndex]} ${
      ACTION[Math.floor(Math.random() * ACTION.length)]
    } ${WHAT[Math.floor(Math.random() * WHAT.length)]} ${
      WHEN[Math.floor(Math.random() * WHEN.length)]
    }`;
}

function switchImage(index) {
  IMG.src = IMG_URL[index];
}

window.onload = function() {
  generateExcuse();

  setInterval(generateExcuse, 10000);
};
