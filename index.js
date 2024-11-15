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
      .addEventListener("click", function () {
        ul.classList.toggle("hide");
      });
    for (var i = 0; i < list.length; i++) {
      var element = list[i];
      element.addEventListener("click", function () {
        console.log("click");
        if (ul.querySelector(".active")) {
          ul.querySelector(".active").classList.remove("active");
        }
        this.classList.add("active");
        if (callback) {
          callback(this);
        }
      });
    }
  };

  window.dropMenu = dropMenu;
})();
