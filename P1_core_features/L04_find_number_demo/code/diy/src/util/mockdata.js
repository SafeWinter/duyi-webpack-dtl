const pool = document.querySelector(".pool");
const frag = Array.from({ length: 600 }, (_, i) => i + 1)
  .map((n) => {
    const div = document.createElement("div");
    if (Math.random() > 0.7) {
      div.classList.add("prime");
    }
    div.innerHTML = n;
    return div;
  })
  .reduce(
    (tank, e) => (tank.appendChild(e), tank),
    document.createDocumentFragment(),
  );

pool.innerHTML = "";
pool.appendChild(frag);

document.querySelector('.n').innerHTML="20";