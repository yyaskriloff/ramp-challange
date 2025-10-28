function isValidSection(section) {
  const dataId = section.getAttribute("data-id");
  if (!dataId) return false;

  if (!dataId.startsWith("92")) {
    return false;
  }

  return section;
}

function getValidArticles(articles, validArticles = []) {
  // break clause
  if (!articles || articles.length === 0) return validArticles;
  const article = articles.shift();

  const dataClass = article.getAttribute("data-class");
  if (!dataClass || !dataClass.endsWith("45"))
    return getValidArticles(articles, validArticles);

  validArticles.push(article);

  return getValidArticles(articles, validArticles);
}

function isValidDiv() {}

function isValidB() {}

document.addEventListener("DOMContentLoaded", () => {
  const nodes = Array.from(document.querySelectorAll("section"))
    .map((section) => {
      const validSection = isValidSection(section);
      if (!validSection) return;

      const articles = Array.from(section.querySelectorAll("article"));
      if (articles.length === 0) return;

      const validArticles = getValidArticles(articles);
      if (validArticles.length === 0) return;

      console.log(validArticles.length);

      return true;
    })
    .filter(Boolean);

  console.log(nodes.length);
});
