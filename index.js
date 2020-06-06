
var myNodelist = document.getElementsByTagName("LI")
for (var i=0; i< myNodelist.length; i++){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close")
  for (var i=0; i<close.length; i++) {
    close[i].onclick = function (){
      var div = this.parentElement;
      div.style.display = "none";
    }
  };


function myFunction () {
  var li = document.createElement("li");
  var item = document.getElementById("input").value;
  var text = document.createTextNode(item)
  li.appendChild(text);

  if (item === "") {
    alert("You must Write something")
  }else {
    document.getElementById("myUL").appendChild(li);
  }document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i=0; i<close.length; i++) {
    close[i].onclick = function (){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
