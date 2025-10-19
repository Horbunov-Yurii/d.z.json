const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

let bookmarks = [];

// Функція рендеру списку з шаблонними рядками
function renderBookmarks() {
  list.innerHTML = bookmarks
    .map(
      (bookmark, index) => `
    <li data-index="${index}">
      <a href="${bookmark}" target="_blank">${bookmark}</a>
      <div>
        <button class="edit">Редагувати</button>
        <button class="delete">Видалити</button>
      </div>
    </li>
  `
    )
    .join("");
}

// Додавання закладки
function addBookmark() {
  const url = input.value.trim();
  if (!url) {
    alert("Введіть URL!");
    return;
  }
  bookmarks.push(url);
  input.value = "";
  renderBookmarks();
}

// Видалення закладки
function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  renderBookmarks();
}

// Редагування закладки
function editBookmark(index) {
  const newUrl = prompt("Редагувати URL:", bookmarks[index]);
  if (newUrl && newUrl.trim() !== "") {
    bookmarks[index] = newUrl.trim();
    renderBookmarks();
  }
}

// Подія для кнопки "Додати"
addBtn.addEventListener("click", addBookmark);

// Додаємо підтримку клавіші Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBookmark();
});

// Делегування подій для кнопок у списку
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  const index = parseInt(li.dataset.index);

  if (event.target.classList.contains("delete")) {
    deleteBookmark(index);
  } else if (event.target.classList.contains("edit")) {
    editBookmark(index);
  }
});








// const input = document.getElementById("bookmarkInput");
// const addBtn = document.getElementById("addBookmarkBtn");
// const list = document.getElementById("bookmarkList");

// // Отримуємо закладки з localStorage або порожній масив
// let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// // Функція для збереження в localStorage
// function saveToLocalStorage() {
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
// }

// // Рендеримо список закладок
// function renderBookmarks() {
//   list.innerHTML = bookmarks
//     .map(
//       (bookmark, index) => `
//     <li data-index="${index}">
//       <a href="${bookmark}" target="_blank">${bookmark}</a>
//       <div>
//         <button class="edit">Редагувати</button>
//         <button class="delete">Видалити</button>
//       </div>
//     </li>
//   `
//     )
//     .join("");
// }

// // Додавання нової закладки
// function addBookmark() {
//   const url = input.value.trim();
//   if (!url) {
//     alert("Введіть URL!");
//     return;
//   }
//   bookmarks.push(url);
//   saveToLocalStorage();
//   input.value = "";
//   renderBookmarks();
// }

// // Видалення закладки
// function deleteBookmark(index) {
//   bookmarks.splice(index, 1);
//   saveToLocalStorage();
//   renderBookmarks();
// }

// // Редагування закладки
// function editBookmark(index) {
//   const newUrl = prompt("Редагувати URL:", bookmarks[index]);
//   if (newUrl && newUrl.trim() !== "") {
//     bookmarks[index] = newUrl.trim();
//     saveToLocalStorage();
//     renderBookmarks();
//   }
// }

// // Подія для кнопки "Додати"
// addBtn.addEventListener("click", addBookmark);

// // Додаємо можливість додавати по Enter
// input.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") addBookmark();
// });

// // Делегування подій на список (редагування/видалення)
// list.addEventListener("click", (event) => {
//   const li = event.target.closest("li");
//   if (!li) return;
//   const index = parseInt(li.dataset.index);

//   if (event.target.classList.contains("delete")) {
//     deleteBookmark(index);
//   } else if (event.target.classList.contains("edit")) {
//     editBookmark(index);
//   }
// });

// // Початкове відображення закладок
// renderBookmarks();