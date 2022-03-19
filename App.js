import { Header } from "./app/components/Header.js";
import { Loader } from "./app/components/Loader.js";
import { Main } from "./app/components/Main.js";
import { Router } from "./app/components/Router.js";
import { infiniteScroll } from "./app/helpers/infinite_scroll.js";

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
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  Router();
  infiniteScroll();
}
