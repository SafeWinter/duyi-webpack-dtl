console.log('module index');

// test Bilibili API:
// '/api/kv-frontend/namespace/data?appKey=333.1339&nscode=10'
const params = new URLSearchParams({
  appKey: '333.1339',
  nscode: 10
});
const remoteUrl = `/api/kv-frontend/namespace/data?${params}`;

fetch(remoteUrl)
  .then(resp => resp.json())
  .then(data => data.data)
  .then(({data}) => {
    console.log(data);
    const frag = Object.entries(data)
      .map(([key, json]) => {
        const id = key.split('.').pop();
        const {name: cname} = json && JSON.parse(json);
        return cname ? {id, cname} : null;
      })
      .filter(e => e !== null)
      .reduce((frag, i) => {
        const dd = document.createElement('dd');
        dd.innerHTML = `${i.id}: ${i.cname}`;
        frag.appendChild(dd);
        return frag;
      }, document.createDocumentFragment());

    document.querySelector('dl').appendChild(frag);
  })
  .catch(console.error);