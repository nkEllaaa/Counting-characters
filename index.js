const contentSection = document.querySelector("section");

const myTitle = document.getElementById("myTitle");
const myTitleDisplay = document.getElementById("myTitleDisplay");
const buttonSave = document.getElementById("buttonSave");

const textarea = document.getElementById("myTextarea");
const charCountDisplay = document.getElementById("charCountDisplay");

const buttonAdd = document.getElementById("buttonAdd");

myTitle.addEventListener("input", () => {
  const title = myTitle.value;
  myTitleDisplay.textContent = `${title}`;
});

buttonSave.addEventListener("click", () => {
  const title = myTitle.value;
  myTitle.style.display = "none";
  myTitleDisplay.textContent = title;
  myTitleDisplay.style.display = "block";
});

textarea.addEventListener("input", () => {
  const text = textarea.value;
  const charCount = text.length;
  charCountDisplay.textContent = `${charCount}`;
});

buttonAdd.addEventListener("click", () => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <div class="input-wrap">
      <input type="text" placeholder="문항의 제목을 입력하세요">
      <h2 class="none"></h2>
      <button class="title-save">제목 저장</button>
    </div>
    <textarea placeholder="문항의 내용을 작성하세요"></textarea>
    <div class="count-wrap">
      <div>
        (<span>0</span>/1000)
      </div>
    </div>
    <div class="bar"></div>
  `;

  contentSection.appendChild(newArticle);

  const articleInput = newArticle.querySelector("input");
  const articleTitleDisplay = newArticle.querySelector("h2");
  const articleButtonSave = newArticle.querySelector(".title-save");
  const articleTextarea = newArticle.querySelector("textarea");
  const articleCharCountDisplay = newArticle.querySelector(".count-wrap span");

  articleInput.addEventListener("input", () => {
    const title = articleInput.value;
    articleTitleDisplay.textContent = title;
  });

  articleButtonSave.addEventListener("click", () => {
    const title = articleInput.value;
    articleInput.style.display = "none";
    articleTitleDisplay.textContent = title;
    articleTitleDisplay.style.display = "block";
  });

  articleTextarea.addEventListener("input", () => {
    const text = articleTextarea.value;
    const charCount = text.length;
    articleCharCountDisplay.textContent = `${charCount}`;
  });
});
