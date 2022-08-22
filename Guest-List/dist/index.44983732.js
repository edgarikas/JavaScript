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
    if (document.querySelector(`#${guestsContainerId}`)) console.dir(`#${guestsContainerId}`);
    const guests = document.createElement("div");
    document.querySelector("#app").append(guests);
    guests.id = guestsContainerId;
    guestList.forEach((e)=>{
        let names = document.createElement("p");
        names.textContent += e;
        guests.append(names);
    });
}
render();
document.querySelector(".buttons").addEventListener("click", (b)=>{
    b.preventDefault();
    let guestInput = document.querySelector("#guest").value;
    if (b.target.id === "addListEnd") {
        guestList.push(guestInput);
        render();
    } else if (b.target.id === "addListStart") {
        console.log(guestInput);
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
    }
});

//# sourceMappingURL=index.44983732.js.map
