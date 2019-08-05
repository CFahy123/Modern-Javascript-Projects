// Book Contructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBooktoList = book => {
  const list = document.getElementById("book-list");
  // create tr element
  const row = document.createElement("tr");
  //console.log(row);
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = (message, className) => {
  // Create div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector(".container");
  // get form
  const form = document.querySelector("#book-form");
  // insert alert
  container.insertBefore(div, form);

  // disappear after 3 s
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.clearFields = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//Delete Book
UI.prototype.removeBookfromList = target => {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Event Listener for add book
document.getElementById("book-form").addEventListener("submit", e => {
  // get form values
  e.preventDefault();
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // instantiate book
  const book = new Book(title, author, isbn);
  //instantiate the UI
  const ui = new UI();

  //validate
  if (title === "" || author === "" || isbn === "") {
    // alert("Failed");
    // Error Alert
    ui.showAlert("please fill in all fields", "error");
  } else {
    ui.addBooktoList(book);
    ui.showAlert("Book has been sucessfully added", "success");
    ui.clearFields();
  }
});

// Event Listener for delete
document.getElementById("book-list").addEventListener("click", e => {
  const ui = new UI();
  ui.removeBookfromList(e.target);
  ui.showAlert("book was deleted", "success");
  e.preventDefault();
});
