const scene = document.querySelector(".scene");
const innerCube = document.querySelector(".inner-cube");
const outerCube = document.querySelector(".outer-cube");

scene.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 60; 
    let y = (e.clientY / window.innerHeight - 0.5) * 60;

    innerCube.style.transform = rotateX(${y}deg) rotateY(${x}deg);
    outerCube.style.transform = rotateX(${y * 1.2}deg) rotateY(${x * 1.2}deg);
});
