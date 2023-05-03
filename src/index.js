// import "./assets/scss/main.scss";
// import styles from "./assets/scss/main.scss";

const searchForm = document.querySelector("form");
const searchIcon = document.querySelector("i");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
let searchResults;
const APP_ID = "2af2771c";
const APP_KEY = "eac9b2f1efd13715519350a0208a1a46";
const baseUrl =
  "https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("i");
  fetchAPI();
});

// async function fetchAPI() {
//   const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`;
//   const response = await fetch(baseURL);
//   const data = await response.json();
//   generateHTML(data.hits);
//   console.log(data);
// }

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`;
  //   const baseURL = `https://api.edamam.com/api/recipes/v2/?type=public&q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`;
  const response = await fetch(baseURL);
  const data = await response.json();
  //   generateHTML(data.hits);
  //   console.log(data);
  searchResults = data.hits;
  console.log(`searchResults: `, searchResults);
  generateHTML(searchResults);
}

// Wersja 1
// function generateHTML(results) {
//   console.log(results);
//   container.classList.remove("initial");
//   let generatedHTML = "";
//   results.forEach((result) => {
//     generatedHTML += `
//       <div class="item">
//         <img src="${result.recipe.image}" alt="img">
//         <div class="flex-container">
//           <h1 class="title">${result.recipe.label}</h1>
//         </div>
//       </div>
//     `;
//   });
//   console.log(generatedHTML);
//   searchResultDiv.innerHTML = generatedHTML;
// }

// Wersja 3
function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.forEach((result, index) => {
    generatedHTML += `
      <div class="item" onClick="openModalContainer(${index})">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
        </div>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}

openModalContainer = (index) => {
  const recipe = searchResults[index].recipe;
  // console.log(recipe);
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.replace("inactive", "active");

  // wstrzyknąć HTML z detalami
  document.getElementById("recipe-details-container").innerHTML =
    generateRecipeDetailsHTML(index);
};

closeModalContainer = () => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.replace("active", "inactive");
};

generateRecipeDetailsHTML = (index) => {
  const recipe = searchResults[index].recipe;
  // console.log(recipe);
  // console.log(recipe.ingredients);

  // Start
  let recipeHTML = '<div class="recipe">';

  // Add header
  recipeHTML += `
        <img src="${recipe.image}" alt="img">
        <div class="recipe-header">
          <h1 class="title">${recipe.label}</h1>
          <h1 class="title">calories: ${Math.floor(recipe.calories)}</h1>
        </div>
        `;

  // Add details
  recipe.ingredients.forEach((ingredient, index) => {
    recipeHTML += `
            <div class="recipe-detail">
              <div>
                <img src="${ingredient.image}" alt="img">
              </div>
              <div>
                <h1 class="title">${ingredient.text}</h1>
              </div>
            </div>
            `;
  });

  // End
  recipeHTML += "</div>";

  return recipeHTML;
};
