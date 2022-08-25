let guestList = [];

function render() {
  guestsContainerId = "guestsList";
  if (document.querySelector(`#${guestsContainerId}`)) {
    document.querySelector(`#${guestsContainerId}`).remove();
  }

  const guests = document.createElement("div");
  document.querySelector("#app").append(guests);
  guests.id = guestsContainerId;

  guestList.forEach((e, i) => {
    let names = document.createElement("p");
    i += 1;
    names.textContent += i;
    names.textContent += ". ";
    names.textContent += e;
    guests.append(names);
  });
}

document.querySelector("form").addEventListener("click", (b) => {
  b.preventDefault();
  let guestInput = document.querySelector("#guest").value;
  if (b.target.nodeName === "BUTTON") {
    switch (b.target.id) {
      case "addListEnd":
        guestList.push(guestInput);
        break;

      case "addListStart":
        guestList.unshift(guestInput);
        break;

      case "removeFirst":
        guestList.shift();
        break;

      case "removeLast":
        guestList.pop();
        break;

      case "reverse":
        guestList.reverse();
        break;

      case "removeFromTo":
        let a = document.querySelector("#firstPoint").value;
        let b = document.querySelector("#secondPoint").value;
        guestList.splice(a - 1, parseInt(b) - parseInt(a - 1));
        break;

      case "addToCertainPoint":
        let point = document.querySelector("#certainPoint").value;
        let name = document.querySelector("#certainPointName").value;
        point = parseInt(point - 1);
        guestList.splice(point, 0, `${name}`);
        break;

      case "firstToLast":
        let firstName = guestList.shift();
        guestList.push(firstName);
        break;

      case "lastToFirst":
        let lastName = guestList.pop();
        guestList.unshift(lastName);
        break;

      case "sortAZ":
        guestList = guestList.sort();
        break;

      case "sortZA":
        guestList = guestList.sort((a, b) => b.localeCompare(a));
        break;

      default:
        break;
    }
    render();
  }
});
