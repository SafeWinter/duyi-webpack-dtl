import $ from 'jquery';
import { getCities } from '../utils/areaService';


console.log('module detail');

$(async function() {
  // console.log(window.location.search);
  const {id, name, cid} = getParams(window.location.search);
  const data = await getCities(id, cid);
  console.log('detail list:', data);
  renderList(data, name, id);
});

function getParams(search) {
  const pairs = search.split('?').pop();
  const params = pairs.split('&')
    .map(kv => kv.split('='))
    .reduce((obj, [k, v]) => {
      obj[k] = decodeURIComponent(v);
      return obj;
    }, {});
  return params;
}

function renderList(data, name, pid) {
  /*<h1 class="title">四川省</h1>
      <dl>
        <dt>管辖城市</dt> */
  const $title = $('h1.title').empty(),
    $box = $('dl'),
    $frag = $(document.createDocumentFragment());

  $title.html(name);

  let isCity;
  for(const {id, label, isLeaf} of data) {
    const $dd = $('<dd>')
      .attr('data-id', id);
    if(isLeaf) {
      isCity = false;
      $dd.html(label);
    } else {
      isCity = true;
      $dd.html(`<a href="/detail.html?id=${pid}&cid=${id}&name=${label}">${label}</a>`)
    }
    $frag.append($dd);
  }
  $box.html(`<dt>管辖${isCity ? '城市' : '区县'}</dt>`)
    .append($frag);
}