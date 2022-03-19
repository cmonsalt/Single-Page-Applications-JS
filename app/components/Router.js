import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

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
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        //console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `
          <p class="error">
          No existen resultados de búsqueda para el termino <mark> ${query} 
          </mark>
          </p>
          `;
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }
        document.getElementById("main").innerHTML = html;
      },
    });
  } else if (hash === "#/contacto") {
    document.getElementById("main").innerHTML = `<h2>Sección de Contacto</h2>`;
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        //console.log(post);
        document.getElementById("main").innerHTML = Post(post);
      },
    });
  }
  document.querySelector(".loader").style.display = "none";
}
