function renderBooks(books) {
  container.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.className = "book-card";
    li.innerHTML = `
      <img src="https://via.placeholder.com/150x250?text=Book" alt="${book.getTitle()}" />
      <div class="book-info">
        <h3>${book.getTitle()}</h3>
        <p>المؤلف: ${book.getAuthor()}</p>
        <p>الفئة: ${book.getCategory()}</p>
        <p>الحالة: ${book.getAvailability() ? "متاح" : "غير متاح"}</p>
        <p>كود الموقع: ${
          book instanceof ReferenceBook ? book.getLocation() : "غير محدد"
        }</p>
        <button class="toggleBtn">تغيير الحالة</button>
        <button class="removeBtn">حذف الكتاب</button>
      </div>
    `;
    li.querySelector(".toggleBtn").addEventListener("click", () => {
      library.toggleAvailability(book.getTitle());
      renderBooks(library.getBooks());
    });
    li.querySelector(".removeBtn").addEventListener("click", () => {
      if (confirm("هل تريد حذف الكتاب؟")) {
        library.removeBook(book.getTitle());
        updateCategories();
        renderBooks(library.getBooks());
      }
    });
    container.appendChild(li);
  });
}
