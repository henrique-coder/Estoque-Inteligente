(function (win, doc) {
  "use strict";
  //verifica se o usuario realmente quer deletar o dado
  if (doc.querySelector(".btnDel")) {
    let btnDel = doc.querySelectorAll(".btnDel");
    for (let i = 0; i < btnDel.length; i++) {
      btnDel[i].addEventListener("click", function (event) {
        if (confirm("Deseja mesmo apagar este dado?")) {
          return true;
        } else {
          event.preventDefault();
        }
      });
    }
  }
})(window, document);
