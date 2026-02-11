const url = '/back/citylist';

async function getCachedData() {
  const cache = localStorage.getItem('areas');
  
  if(cache) {
    console.log('hit cache!');
    return JSON.parse(cache);
  }

  console.log('fetch remote data:', Date.now());
  const res = await fetch(url);
  const { data } = await res.json();
  const result = [...data];
  localStorage.setItem('areas', JSON.stringify(result));
  return result;
}

export async function getProvinces() {
  const areas = await getCachedData();
  return areas.map(p => ({
    id: p.value,
    label: p.label
  }))
}

export async function getCities(pid) {
  const areas = await getCachedData();
  const province = areas.find(p => p.value === pid);
  return province.children;
}

