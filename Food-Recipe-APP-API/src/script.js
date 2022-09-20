const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
  getMealList();
  document.querySelector("#search-input").value = "";
});

window.addEventListener("DOMContentLoaded", () => {
  let mealResult = document.createElement("div");
  mealResult.classList = "meal-result";
  document.querySelector(".meal-wrapper").append(mealResult);
  let heading = document.createElement("h2");
  heading.classList = "title";
  heading.id = "h2";
  heading.textContent = "Your Search Results:";

  mealResult.append(heading);
});

function renderList(meal) {
  let mealItems = document.createElement("div");
  mealItems.classList = "meal-items";
  document.querySelector("#meal").append(mealItems);

  let divImg = document.createElement("div");
  divImg.classList = "meal-img";
  let img = document.createElement("img");
  img.alt = "food";
  img.src = meal.strMealThumb;
  divImg.append(img);

  let divMealName = document.createElement("div");
  divMealName.classList = "meal-name";
  let heading3 = document.createElement("h3");
  heading3.textContent = meal.strMeal;
  let a = document.createElement("a");
  a.classList = "recipe-btn";
  a.textContent = "Get Recipe";
  a.href = "#";
  a.id = `${meal.idMeal}`;
  divMealName.append(heading3, a);

  mealItems.append(divImg, divMealName);
}

function deleteMeal() {
  if (document.querySelector("#meal")) {
    document.querySelector("#meal").remove();
  }
  if (document.querySelector(".notFound")) {
    document.querySelector(".notFound").remove();
  }
}

function setRecipesAmount(amount) {
  document.querySelector(
    "#h2"
  ).textContent = `Your Search Result: ${amount} Recipes`;
}

function getMealList() {
  let searchInput = document.querySelector("#search-input").value;
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`${searchInput} recipe -> `, data);
      deleteMeal();
      setRecipesAmount(data.meals.length);

      if (data.meals) {
        let divMeal = document.createElement("div");
        divMeal.id = "meal";
        document.querySelector(".meal-result").append(divMeal);

        data.meals.forEach((meal) => {
          renderList(meal);
        });
        document.querySelector("#meal").addEventListener("click", (e) => {
          //console.log(e.target.id);
          getMealRecipe(e);
        });
      }
    })
    .catch((error) => {
      console.log("Nera tokio");
      document.querySelector(
        "#h2"
      ).textContent = `Your Search Result: 0 Recipes`;
      let result = document.createElement("p");
      result.textContent = "Sorry, We did not find any meal :/";
      result.classList = "notFound";
      document.querySelector(".meal-result").append(result);
    });
}

function renderMealInstruction(meal) {
  let mealDetails = document.createElement("div");
  mealDetails.classList = "meal-details";

  let closeBtn = document.createElement("button");
  closeBtn.classList = "recipe-close-btn btn";
  closeBtn.textContent = "X";

  let mealDetailsContent = document.createElement("div");
  mealDetailsContent.classList = "meal-details-content";

  let heading = document.createElement("h2");
  heading.classList = "recipe-title";
  heading.textContent = `${meal.strMeal}`;

  let category = document.createElement("p");
  category.classList = "recipe-category";
  category.textContent = meal.strCategory;

  let recipeInstruction = document.createElement("div");
  recipeInstruction.classList = "recipe-instruct";

  let h3 = document.createElement("h3");
  h3.textContent = "Instruction: ";
  h3.id = "Instruction";
  let description = document.createElement("p");
  description.textContent = `${meal.strInstructions}`;
  recipeInstruction.append(h3, description);

  let recipeImg = document.createElement("div");
  recipeImg.classList = "recipe-meal-img";
  let img = document.createElement("img");
  img.src = `${meal.strMealThumb}`;
  recipeImg.append(img);

  let link = document.createElement("div");
  link.classList = "recipe-link";
  let a = document.createElement("a");
  a.target = "_blank";
  a.href = `${meal.strYoutube}`;
  a.textContent = "Watch Video";
  link.append(a);

  mealDetailsContent.append(
    heading,
    category,
    recipeInstruction,
    recipeImg,
    link
  );

  mealDetails.append(closeBtn, mealDetailsContent);

  document.querySelector(".meal-wrapper").append(mealDetails);

  mealDetails.classList.add(`showRecipe`);

  document.querySelector(".recipe-close-btn").addEventListener("click", (e) => {
    document
      .querySelector(".meal-details-content")
      .parentElement.classList.remove(`showRecipe`);
  });
}

function getMealRecipe(e) {
  e.preventDefault();

  if (e.target.className === "recipe-btn") {
    if (document.querySelector(".meal-details")) {
      document.querySelector(".meal-details").remove();
    }

    // console.log(e.target.id);
    fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
      .then((response) => response.json())
      .then((data) => mealRecipeInstruction(data.meals));
  }
}

function mealRecipeInstruction(meal) {
  meal = meal[0];
  renderMealInstruction(meal);
}
