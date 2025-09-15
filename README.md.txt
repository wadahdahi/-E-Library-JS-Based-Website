# E-Library JS-Based Website

## Overview
"Warqa" is an interactive e-library website developed using JavaScript, HTML, and CSS. It allows users to:  
- View books  
- Search for books  
- Add new books  
- Manage book availability  

The site supports regular books and reference books, with the ability to input and display the Location Code for reference books.

---

## Main Features

### Book Display
- All books are shown as cards containing:
  - A placeholder image for the book
  - Title, author, and category
  - Availability status
  - Location Code (for reference books only)

### Search and Filtering
- Search by title or author.  
- Filter books by category.

### Add New Books
- Users can add books via an interactive modal, entering:
  - Book title, author, and category
  - Availability status
  - Location Code (for reference books; optional for regular books)

### Book Management
- Toggle availability directly from the book card.  
- Delete books with user confirmation.

### Reference Book Code
- The code consists of 3 elements: Floor + Section + Shelf.  
- It is entered when creating a new reference book and automatically displayed on the book card.

---

## Usage
1. Open index.html in a modern browser.  
2. Books from the project library are automatically loaded and displayed.  
3. To search for a book:  
   - Use the top search field or the category filter.  
4. To add a new book:  
   - Click the "Add Book" button.  
   - Fill in the fields in the modal, including the Location Code for reference books.  
   - Click "Save Book" to automatically display it in the list.  
5. To manage a book:  
   - Toggle availability: click "Toggle Availability".  
   - Delete a book: click "Delete Book" and confirm.

---

## Technologies Used
- HTML5: for building the basic structure of the site.  
- CSS3: for styling cards, modal, and navigation.  
- JavaScript (ES6+): for managing data (Library, Book, ReferenceBook), DOM interactions, card rendering, and Location Code input.