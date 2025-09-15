"use strict";

// === Classes in this file : ===========================
// ===[ 1- Library ]=====================================
// ========= |                      =====================
// ========= Object library         =====================
// ======================================================
// ======================================================

class Library {
  #books;

  constructor() {
    this.#books = [];
  }

  addBook(book) {
    this.#books.push(book);
  }
  removeBook(title) {
    this.#books = this.#books.filter((b) => b.getTitle() !== title);
  }
  searchBooks(query) {
    const q = query.toLowerCase();
    return this.#books.filter(
      (book) =>
        book.getTitle().toLowerCase().includes(q) ||
        book.getAuthor().toLowerCase().includes(q)
    );
  }
  // ------------[ Filtering on books ]------------------

  filterByCategory(category) {
    if (category === "all") return this.#books;
    return this.#books.filter((book) => book.getCategory() === category);
  }
  toggleAvailability(title) {
    const book = this.#books.find((b) => b.getTitle() === title);
    if (book) book.toggleAvailability();
  }
  getBooks() {
    return this.#books;
  }
}

// ============= Creating a library and books ===========
const library = new Library();

library.addBook(new Book("1984", "جورج أورويل", "رواية"));
library.addBook(
  new ReferenceBook("محاط بالحمقى", "توماس إريكسون", "علم نفس / نطوير ذات")
);
library.addBook(
  new Book("الأب الغني الأب الفقير", "روبرت كيوزاكي", "مال / أعمال")
);
library.addBook(new Book("التصميم في كل شيء", "وضاح ضاحي", "غرافيك ديزاين"));
library.addBook(
  new ReferenceBook(
    "قوانين الطبيعة البشرية",
    "روبرت غرين",
    "علم نفس / تطوير ذات"
  )
);
library.addBook(new Book("سايكولوجي الجماهير", "غوستاف لوبون", "علم نفس"));
library.addBook(new Book("الخيميائي", "باولو كويلو", "رواية"));

// === DOM ============================================
const container = document.getElementById("cardsWrapper");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const addBookBtn = document.getElementById("addBookBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveBookBtn = document.getElementById("saveBookBtn");

// Updating categories -------------------------------
function updateCategories() {
  const cats = [...new Set(library.getBooks().map((b) => b.getCategory()))];
  categoryFilter.innerHTML = `<option value="all">كل الفئات</option>`;
  cats.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Search and filtering ------------------------------
searchInput.addEventListener("input", () =>
  renderBooks(library.searchBooks(searchInput.value))
);
categoryFilter.addEventListener("change", () =>
  renderBooks(library.filterByCategory(categoryFilter.value))
);

// Adding a book -------------------------------------
addBookBtn.addEventListener("click", () => (modal.style.display = "flex"));
closeModalBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

saveBookBtn.addEventListener("click", () => {
  const title = document.getElementById("newTitle").value.trim();
  const author = document.getElementById("newAuthor").value.trim();
  const category = document.getElementById("newCategory").value.trim();
  const isAvailable = document.getElementById("newAvailable").value === "true";

  // استدعاء دالة locationCode لجمع القيم من select
  const code = locationCode();
  if (!title || !author || !category) {
    alert("يرجى ملء جميع الحقول!");
    return;
  }
  if (!code) return; // التوقف إذا لم يتم اختيار الكود

  // إنشاء الكتاب حسب النوع
  const newBook =
    category.toLowerCase() === "مرجع"
      ? new ReferenceBook(title, author, category, code, isAvailable)
      : new Book(title, author, category, isAvailable);

  library.addBook(newBook);
  updateCategories();
  renderBooks(library.getBooks());

  // إغلاق المودال وإفراغ الحقول
  modal.style.display = "none";
  document.getElementById("newTitle").value = "";
  document.getElementById("newAuthor").value = "";
  document.getElementById("newCategory").value = "";
});

// التهيئة-------------------------------------------
updateCategories();
renderBooks(library.getBooks());
