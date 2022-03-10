export function SearchForm() {
  const $form = document.createElement("form"),
    $input = document.createElement("input");
  $input.type = "search";
  $input.name = "search";
  $input.placeholder = "Buscar...";
  $form.classList.add("form-search");
  $form.appendChild($input);
  return $form;
}
