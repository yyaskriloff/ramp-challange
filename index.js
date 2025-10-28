const DIV_TAG_REGEX = /^.*78.*$/;

function isValidSection(section) {
  const dataId = section.getAttribute("data-id");
  if (!dataId || !dataId.startsWith("92")) return false;

  return section;
}

function isValidArticle(article) {
  const dataClass = article.getAttribute("data-class");
  if (!dataClass || !dataClass.endsWith("45")) return false;

  return article;
}

function isValidDiv(div) {
  const dataTag = div.getAttribute("data-tag");
  if (!dataTag || !DIV_TAG_REGEX.test(dataTag)) return false;

  return div;
}

function isValidValue(b) {
  const hasClass = b.classList.contains("ref");
  const value = b.getAttribute("value");
  if (!hasClass || !value) return false;

  return value;
}

function getValueFromSection(section) {
  const articles = Array.from(section.querySelectorAll("article")).filter(
    isValidArticle
  );

  if (articles.length === 0) return [];

  const divs = articles.flatMap((article) =>
    Array.from(article.querySelectorAll("div")).filter(isValidDiv)
  );
  if (divs.length === 0) return [];

  const values = divs.flatMap((div) =>
    Array.from(div.querySelectorAll("b"))
      .map((b) => isValidValue(b))
      .filter(Boolean)
  );
  if (values.length === 0) return [];
  return values;
}

document.addEventListener("DOMContentLoaded", () => {
  const validSections = Array.from(document.querySelectorAll("section")).filter(
    (section) => isValidSection(section)
  );

  const value = validSections.flatMap(getValueFromSection).join("");

  console.log(value);
});
