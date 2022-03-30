const $button = document.querySelector("button");
$button.addEventListener("click", () => {
  location.reload();
});

const $div = document.querySelector("div");
$div.addEventListener("keydown", (e) => {
  if (e.code === "Enter") location.reload();
});
