export function SearchForm() {
  const $form = document.createElement("form"),
    $input = document.createElement("input");
  $input.type = "search";
  $input.name = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";
  $form.classList.add("search-form");
  $form.appendChild($input);

  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }
  document.addEventListener("search", (e) => {
    if (!e.target.matches("input[type=search]")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });

  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?=${e.target.search.value}`;
  });
  return $form;
}
