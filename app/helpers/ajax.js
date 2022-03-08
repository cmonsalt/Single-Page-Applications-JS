export function ajax(props) {
  let { url, cbSuccess } = props;

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error";
      document.getElementById("root").innerHTML = `
      <div class="error">Error ${err.status}: ${message}</div>
      `;
    });
}
