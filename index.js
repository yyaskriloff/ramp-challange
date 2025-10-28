function isValidSection(section) {
  const dataId = section.getAttribute("data-id");
  if (!dataId) return false;

  if (!dataId.startsWith("92")) {
    return false;
  }

  return section;
}

function isValidArticle(article) {}

function isValidDiv() {}

function isValidB() {}

document.addEventListener("DOMContentLoaded", () => {
  const nodes = Array.from(document.querySelectorAll("section"))
    .map((section) => {
      const validSection = isValidSection(section);
      if (!validSection) return;

      const articles = section.querySelectorAll("article");
      if (articles.length === 0) return;
    })
    .filter(Boolean);

  console.log(nodes);
});
