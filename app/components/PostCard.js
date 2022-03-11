export function PostCard(props) {
  let { date, _links, slug, title } = props;
  console.log(_links);
  let dateFormat = new Date(date).toLocaleString();
  // urlPoster =
  //   _links["wp:featuredmedia"][0].embeddable === true
  //     ? _links["wp:featuredmedia"][0].href
  //     : "app/assets/favicon.png"; // me saco error al obtener las imagenes

  return `
<article class="post-card">
  <img src="https://placeimg.com/200/200/architecture" alt="${title.rendered}">
  <h2>${title.rendered}</h2>
  <p>
    <time datetime="${dateFormat}">${dateFormat}</time>
    <a href="#/${slug}">Ver publicación</a>
  </p>
</article>
  `;
}
