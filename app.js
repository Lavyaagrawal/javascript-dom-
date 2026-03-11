const booklist = document.querySelector("#book-list");
console.log("book-list next siibling is:", booklist.nextSibling);
console.log("book-list next element siibling is:", booklist.nextElementSibling);

console.log("book-list previous siibling is:", booklist.previousSibling);
console.log("book-list next previous siibling is:", booklist.previousElementSibling);

booklist.previousElementSibling.querySelector("p").innerHTML+='<br/>TOO COOL FOR EVEYONE ELSE' 