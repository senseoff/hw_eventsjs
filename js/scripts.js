(function() {
    "use strict";

    let div = document.querySelector('.text'),
        area = document.querySelector('.textarea');

    area.hidden = true;

    document.onkeydown = function (e) {
      if (e.ctrlKey && e.keyCode == '69'){
        div.hidden = true;
        area.hidden = false;
        area.focus()
        area.innerHTML = div.innerHTML;
        return false;
      }
  
      if (e.ctrlKey && e.keyCode == '83'){
        div.hidden = false;
        area.hidden = true;
        div.innerHTML = area.value;
        return false;
      } else if (e.keyCode == '27'){
        div.hidden = false;
        area.hidden = true;
      }
    };

    }());