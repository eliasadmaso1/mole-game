const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreElement = document.querySelector(".score span");

let score = 0;

const sound = new Audio("assets/smash.mp3");



const run = () => {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  let timer = null;

  const img = document.createElement("img");
  img.classList.add("mole");
  img.setAttribute("src","https://media.istockphoto.com/vectors/cute-cartoon-groundhod-vector-id645546840?k=20&m=645546840&s=612x612&w=0&h=mruuzXSU7-FrH6gfbHq8e0xPB6Aov6A5uU7cvbKibm8=");

  img.addEventListener("click", () => {
    score += 10;
    sound.play();
    scoreElement.textContent = score;
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    run();
  }, 1000);

  if(score === 10){
      restart()
  }
};



run();

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});

window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});
