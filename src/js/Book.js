"use strict";

// === Classes in this file : ===========================
// ===[ 1- Class Book ]==================================
// ===[ 2- Class ReferenceBook ]==== extends Book =======
// =================================  |           =======
// =================================  | #locationCode ===
// ======================================================

class Book {
  #title;
  #author;
  #category;
  #isAvailable;

  constructor(title, author, category, isAvailable = true) {
    this.#title = title;
    this.#author = author;
    this.#category = category;
    this.#isAvailable = isAvailable;
  }

  getTitle() {
    return this.#title;
  }
  getAuthor() {
    return this.#author;
  }
  getCategory() {
    return this.#category;
  }
  getAvailability() {
    return this.#isAvailable;
  }

  setTitle(title) {
    this.#title = title;
  }
  setAuthor(author) {
    this.#author = author;
  }
  setCategory(category) {
    this.#category = category;
  }
  setAvailability(status) {
    this.#isAvailable = status;
  }

  toggleAvailability() {
    this.#isAvailable = !this.#isAvailable;
  }

  displayInfo() {
    return `${this.#title} - ${this.#author} (${this.#category}) - ${
      this.#isAvailable ? "متاح" : "غير متاح"
    }`;
  }
}

class ReferenceBook extends Book {
  #locationCode;

  constructor(title, author, category, locationCode, isAvailable = true) {
    super(title, author, category, isAvailable);
    this.#locationCode = locationCode;
  }

  getLocation() {
    return this.#locationCode;
  }
  setLocation(code) {
    this.#locationCode = code;
  }

  displayInfo() {
    return `${super.displayInfo()} - الموقع: ${this.#locationCode}`;
  }
}
