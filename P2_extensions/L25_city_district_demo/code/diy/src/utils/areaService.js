// const url = '/back/citylist';
const url = '/api/citylist'; // compatible with live server

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
    label: p.label,
    isLeaf: !Array.isArray(p.children)
  }))
}

export async function getCities(pid, cid) {
  console.log({pid, cid});
  const areas = await getCachedData();
  const province = areas.find(p => p.value === pid);
  if(!cid) {
    return province.children.map(c => ({
      id: c.value,
      label: c.label,
      isLeaf: !Array.isArray(c.children)
    }));
  }
  const city = province.children.find(c => c.value === cid);
  return city.children.map(c => ({
      id: c.value,
      label: c.label,
      isLeaf: !Array.isArray(c.children)
    }))
}

