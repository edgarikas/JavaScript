document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const cardInputs = new FormData(e.target);
    console.log(Object.fromEntries(cardInputs));
});

//# sourceMappingURL=index.24a4377f.js.map
