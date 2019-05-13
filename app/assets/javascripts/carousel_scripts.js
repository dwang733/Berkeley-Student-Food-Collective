$(document).ready(function() {
  function classString(list) {
    let returnString = ".";
    for (let i = 0; i < list.length; i++) {
      returnString += list[i] + ".";
    }
    return returnString;
  }

  function hoverHelper(obj, apply) {
    let over_index = obj.index();
    let classesOver = classString(event.currentTarget.classList).substring(0, classString(event.currentTarget.classList).length - 1);
    $(classesOver).each(function(index) {
      index += 1;
      if (index < over_index) {
        apply.call($(this).context.classList, "spreadLeft");
      } else if (index > over_index) {
        apply.call($(this).context.classList, "spreadRight");
      }
    });
  }

  /*
  $(".carousel_element").mouseover(function() {
    hoverHelper($(this), DOMTokenList.prototype.add);
  });

  $(".carousel_element").mouseout(function() {
    hoverHelper($(this), DOMTokenList.prototype.remove);
  });
  */


});

function carouselAlert() {
  alert('Vendor Card - Still in Progress');
}

function showCollapsible(collapsibleID) {

  otherCollapsiblesDisappear(collapsibleID);

  currentDisplay = document.getElementById(collapsibleID).style.display;
  if (currentDisplay == "") {
    document.getElementById(collapsibleID).style.display = "block";
  } else if (currentDisplay == "block") {
    document.getElementById(collapsibleID).style.display = "";
  }
}

function otherCollapsiblesDisappear(collapsibleID){
  collapsibles = document.getElementsByClassName("carousel_parallax");
  for (var i in collapsibles) {
    let collapsible = collapsibles.item(i);
    collapsible.style.display = "";
  }
}