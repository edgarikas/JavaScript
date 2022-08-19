function render(data) {
    const cardContainerId = "business-card-output";
    if (document.querySelector(`#${cardContainerId}`)) document.querySelector(`#${cardContainerId}`).remove();
    const cardContainer = document.createElement("div");
    cardContainer.id = cardContainerId;
    const cardContainerRight = document.createElement("div");
    const cardContainerLeft = document.createElement("div");
    cardContainerRight.id = "cardR";
    cardContainerLeft.id = "cardL";
    const nameP = createElement("p", [
        {
            name: "textContent",
            value: data.name
        }
    ]);
    const emailP = createElement("p", [
        {
            name: "textContent",
            value: data.email
        }, 
    ]);
    const phoneP = createElement("p", [
        {
            name: "textContent",
            value: data.phone
        }, 
    ]);
    const addressP = createElement("p", [
        {
            name: "textContent",
            value: data.address
        }, 
    ]);
    const serviceP = createElement("p", [
        {
            name: "textContent",
            value: data.service
        }, 
    ]);
    cardContainerRight.append(emailP, phoneP, addressP);
    cardContainerLeft.append(generateImage());
    cardContainerLeft.append(nameP, serviceP);
    cardContainer.append(cardContainerLeft, cardContainerRight);
    document.querySelector("#app").append(cardContainer);
}
function createElement(tag, props) {
    const newTag = document.createElement(tag);
    if (props && props.length) props.forEach((singleProp)=>{
        newTag[singleProp.name] = singleProp.value;
    });
    return newTag;
}
function generateImage() {
    let img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZS7sKX1MJ7WClhNt2EwP12GbFzpc-09wYP1_VPknMkG1v3JWS9o_WEBAlj0CrrqIy0&usqp=CAU";
    img.id = "icon";
    return img;
}
window.addEventListener("DOMContentLoaded", ()=>{
    if (window.localStorage.getItem("cardInputs")) {
        const persistedData = JSON.parse(window.localStorage.getItem("cardInputs"));
        render(persistedData);
        document.querySelectorAll("#card-inputs input").forEach((input)=>{
            input.value = persistedData[input.name];
        });
    }
});
document.querySelector("#card-inputs").addEventListener("submit", (e)=>{
    e.preventDefault();
    const cardInputs = Object.fromEntries(new FormData(e.target));
    render(Object.fromEntries(new FormData(e.target)));
    window.localStorage.setItem("cardInputs", JSON.stringify(cardInputs));
});
document.querySelector(".action").addEventListener("click", (e)=>{
    if (e.target.id === "clearData") {
        e.preventDefault();
        window.localStorage.clear();
        alert("Data Deleted");
        location.reload();
    }
});

//# sourceMappingURL=index.44983732.js.map
