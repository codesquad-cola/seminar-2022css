const [$lg1, $lg2] = document.querySelectorAll(".lg");
const [$md1, $md2] = document.querySelectorAll(".md");
const [$sm1, $sm2] = document.querySelectorAll(".sm");
const [$book1, $book2] = document.querySelectorAll(".book-info");

$lg1.addEventListener("click", () => {
  $book1.style.width = "1200px";
});
$md1.addEventListener("click", () => {
  $book1.style.width = "700px";
});
$sm1.addEventListener("click", () => {
  $book1.style.width = "400px";
});
$lg2.addEventListener("click", () => {
  $book2.style.width = "1200px";
});
$md2.addEventListener("click", () => {
  $book2.style.width = "700px";
});
$sm2.addEventListener("click", () => {
  $book2.style.width = "400px";
});
