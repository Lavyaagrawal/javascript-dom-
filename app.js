var books=document.querySelectorAll('#book-list li .name')
Array.from(books).forEach(function(book){
    book.textContent+='(book title)';
    console.log(book.textContent)
})
const booklist=document.querySelector('#book-list');
console.log(booklist.innerHTML)
booklist.innerHTML='<h2> Books and More Books<h2>'
booklist.innerHTML+='<p> this is how you add html<p>'