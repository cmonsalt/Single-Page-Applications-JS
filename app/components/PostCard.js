export function PostCard(props) {
  let { date, id, _links, slug, title } = props;
  //console.log(_links);
  let dateFormat = new Date(date).toLocaleString();
  // urlPoster =
  //   _links["wp:featuredmedia"][0].embeddable === true
  //     ? _links["wp:featuredmedia"][0].href
  //     : "app/assets/favicon.png"; // me saco error al obtener las imagenes

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });
  return `
<article class="post-card">
  <img src="https://placeimg.com/200/200/architecture" alt="${title.rendered}">
  <h2>${title.rendered}</h2>
  <p>
    <time datetime="${dateFormat}">${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}">Ver publicación</a>
  </p>
</article>
  `;
}
