import $ from 'jquery';

const pool = $(".pool");
const frag = Array.from({ length: 600 }, (_, i) => i + 1)
  .map((n) => {
    const div = $("<div>");
    if (Math.random() > 0.7) {
      div.addClass("prime");
    }
    div.html(n);
    return div.get(0);
  })
  .reduce(
    (tank, e) => (tank.appendChild(e), tank),
    document.createDocumentFragment(),
  );

pool.html('').append(frag);

$('.n').html(20);