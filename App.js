import api from "./app/helpers/wp_api.js";
import { ajax } from "./app/helpers/ajax.js";
import { Header } from "./app/components/Header.js";
import { Loader } from "./app/components/Loader.js";

export function App() {
  // document.getElementById("root").innerHTML = `<h1>Bienvenidos a todos</h1>`;
  // ajax({
  //   url: api.POSTS,
  //   cbSuccess: (posts) => {
  //     console.log(posts);
  //   },
  // });
  // ajax({
  //   url: api.CATEGORIES,
  //   cbSuccess: (categories) => {
  //     console.log(categories);
  //   },
  // });
  const $root = document.getElementById("root");
  $root.appendChild(Loader());
  $root.appendChild(Header());
}
