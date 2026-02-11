import { getProvinces } from "../utils/areaService";
import $ from 'jquery';

console.log('module list');

$(async function() {
  const provinces = await getProvinces();
  console.log('provinces fetched:', provinces);
  renderProvinces(provinces);
});

function renderProvinces(data) {
  /*<ul class="provinces">
      <li><a href="">省份1</a></li> */
  const $box = $('ul.provinces'),
    $frag = $(document.createDocumentFragment());
  
  $box.html('');

  for(const p of data) {
    $frag.append($('<li>').append($('<a>')
      .html(p.label)
      .prop('href', `/detail.html?id=${p.id}&name=${p.label}`)));
  }
  $box.append($frag);
}