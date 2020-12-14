(function () {
  console.log("asdasd");

  const foo = (val) => console.log(val);

  foo("dasda das asda");

  const button = document.querySelector("#first-link");

  button.addEventListener("click", () => {
    foo("dddddd");
  });
})();
