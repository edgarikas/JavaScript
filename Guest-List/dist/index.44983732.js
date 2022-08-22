let guestList = [
    "Arda George",
    "Richard Black",
    "Eesha Lawrence",
    "Blade Carroll",
    "Earl Kinney", 
];
function render() {
    guestsContainerId = "guestsList";
    if (document.querySelector(`#${guestsContainerId}`)) document.querySelector(`#${guestsContainerId}`).remove();
    const guests = document.createElement("div");
    document.querySelector("#app").append(guests);
    guests.id = guestsContainerId;
    let i = 1;
    guestList.forEach((e)=>{
        let names = document.createElement("p");
        names.textContent += i;
        names.textContent += ". ";
        names.textContent += e;
        guests.append(names);
        i += 1;
    });
}
render();
document.querySelector("form").addEventListener("click", (b)=>{
    b.preventDefault();
    let guestInput = document.querySelector("#guest").value;
    if (b.target.id === "addListEnd") {
        guestList.push(guestInput);
        render();
    } else if (b.target.id === "addListStart") {
        guestList.unshift(guestInput);
        render();
    } else if (b.target.id === "removeFirst") {
        guestList.shift();
        render();
    } else if (b.target.id === "removeLast") {
        guestList.pop();
        render();
    } else if (b.target.id === "reverse") {
        guestList.reverse();
        render();
    } else if (b.target.id === "removeFromTo") {
        let a = document.querySelector("#firstPoint").value;
        let b = document.querySelector("#secondPoint").value;
        let amount = 0;
        amount = parseInt(b) - parseInt(a);
        a = parseInt(a - 1);
        amount = parseInt(amount + 1);
        guestList.splice(a, amount);
        render();
    } else if (b.target.id === "addToCertainPoint") {
        let a = document.querySelector("#certainPoint").value;
        let name = document.querySelector("#certainPointName").value;
        guestList.splice(a, 0);
        a = parseInt(a - 1);
        guestList.splice(a, 0, `${name}`);
        render();
    } else if (b.target.id === "firstToLast") {
        let firstName = guestList.shift();
        guestList.push(firstName);
        render();
    } else if (b.target.id === "lastToFirst") {
        let lastName = guestList.pop();
        guestList.unshift(lastName);
        render();
    }
});

//# sourceMappingURL=index.44983732.js.map
