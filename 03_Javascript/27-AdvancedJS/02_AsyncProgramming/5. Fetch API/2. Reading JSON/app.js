const result = document.querySelector(".result");

async function renderData() {
  try {
    const res = await fetch('data.json');
    if(!res.ok) throw Error(res.statusText);   // if response is NOT ok
    const data = await res.json();
    console.log(data);
    result.textContent = data.name;
  } catch (error) {
    console.log(error);
  }
}

renderData();