(function () {
  var dropMenu = function (dom, callback) {
    if (!dom) {
      console.error("dom is required");
      return;
    }
    var ul = dom.querySelector("ul");
    var list = dom.querySelectorAll("li");
    dom
      .querySelector(".drop_menu_title")
      .addEventListener("click", function (e) {
        e.stopPropagation();
        ul.classList.toggle("hide");
      });
    for (var i = 0; i < list.length; i++) {
      var element = list[i];
      element.addEventListener("click", function (e) {
        e.stopPropagation();
        if (ul.querySelector(".active")) {
          ul.querySelector(".active").classList.remove("active");
        }
        this.classList.add("active");
        dom.querySelector(".drop_menu_title span").innerText =
          this.innerText.trim();
        if (callback) {
          callback(this);
        }
        ul.classList.toggle("hide");
      });
    }
    window.addEventListener("click", function (e) {
      e.stopPropagation();
      if (!ul.classList.contains("hide")) {
        ul.classList.add("hide");
      }
    });
  };

  window.dropMenu = dropMenu;
})();
