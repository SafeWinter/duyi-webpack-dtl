import $ from 'jquery';
import { getCities } from '../utils/areaService';


console.log('module detail');

$(async function() {
  // console.log(window.location.search);
  const {id, name} = getParams(window.location.search);
  const cities = await getCities(id);
  console.log('cities', cities);
  renderCities(cities, name);
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

function renderCities(cities, name) {
  /*<h1 class="title">四川省</h1>
      <dl>
        <dt>管辖城市</dt> */
  const $title = $('h1.title').empty(),
    $box = $('dl'),
    $frag = $(document.createDocumentFragment());

  $title.html(name);

  for(const city of cities) {
    $frag.append($('<dd>')
      .html(city.label)
      .prop('lang', city.value));
  }
  $box.html('<dt>管辖城市</dt>')
    .append($frag);
}