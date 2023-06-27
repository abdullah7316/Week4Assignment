// JavaScript code
var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function() {
  var nameInput = document.getElementById("name-input");
  var names = nameInput.value.split(",").map(function(name) {
    return name.trim();
  });

  var greetingsContainer = document.getElementById("greetings-container");
  greetingsContainer.innerHTML = "";

  names.forEach(function(name) {
    var greeting;
    if (_.startsWith(name, 'j') || _.startsWith(name, 'J')) {
      greeting = "Goodbye " + name;
      console.log(greeting);
    } else {
      greeting = "Hello " + name;
      console.log(greeting);
    }

    var p = document.createElement("p");
    p.textContent = greeting;
    p.classList.add(_.startsWith(name, 'j') || _.startsWith(name, 'J') ? "goodbye" : "hello");
    greetingsContainer.appendChild(p);
  });
});
