import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";

export async function Router() {
  let { hash } = location;
  //console.log(hash);
  document.getElementById("main").innerHTML = null;
  if (!hash || hash === "#/") {
    await ajax({
      url: api.POST,
      cbSuccess: (posts) => {
        //console.log(posts);
        let html = "";
        posts.forEach((post) => {
          html += PostCard(post);
          document.getElementById("main").innerHTML = html;
        });
      },
    });
  } else if (hash.includes("#/search")) {
    document.getElementById("main").innerHTML = `<h2>Sección del Buscador</h2>`;
  } else if (hash === "#/contacto") {
    document.getElementById("main").innerHTML = `<h2>Sección de Contacto</h2>`;
  } else {
    document.getElementById(
      "main"
    ).innerHTML = `<h2>Aquí cargara el contenido del posts previamente seleccionado</h2>`;
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        document.getElementById("main").innerHTML = Post(post);
      },
    });
  }
  document.querySelector(".loader").style.display = "none";
}
