import styles from "./assets/scss/index.scss";

const searchFormElement = document.getElementById("search-form");
const searchInputElement = document.getElementById("search-input");
const searchIconElement = document.getElementById("search-icon");
const searchResultsElement = document.getElementById("search-results");
const closeModalElement = document.getElementById("close-modal");
const APP_ID = "2af2771c";
const APP_KEY = "eac9b2f1efd13715519350a0208a1a46";
const baseUrl =
  "https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}";

let searchQuery = "";
let searchResults;

window.onload = () => {
  addEventListenersToElements();
};

const addEventListenersToElements = () => {
  searchFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    fetchAPI();
  });

  searchIconElement.addEventListener("click", (e) => {
    e.preventDefault();
    searchQuery = searchInputElement.value;
    if (searchQuery !== "") {
      fetchAPI();
    }
  });

  closeModalElement.addEventListener("click", () => {
    closeModalContainer();
  });
};

async function fetchAPI() {
  console.log(`searchQuery: `, searchQuery);
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`;
  const response = await fetch(baseURL);
  const responseData = await response.json();
  searchResults = responseData.hits;
  console.log(`searchResults: `, searchResults);
  generateSearchResultsHTML(searchResults);
}

const generateSearchResultsHTML = (searchResults) => {
  searchResults.forEach((result, index) => {
    const recipe = document.createElement("div");
    recipe.classList.add("recipe");

    const recipeLabel = document.createElement("div");
    recipeLabel.classList.add("recipe-label");
    recipeLabel.innerHTML = result.recipe.label;
    recipe.appendChild(recipeLabel);

    const recipeImage = document.createElement("img");
    recipeImage.src = result.recipe.image;
    recipeImage.alt = "recipe image";
    recipeImage.classList.add("recipe-image");
    recipe.appendChild(recipeImage);

    recipe.addEventListener("click", () => {
      openModalContainer(index);
    });

    searchResultsElement.appendChild(recipe);
  });
};

const openModalContainer = (index) => {
  const recipe = searchResults[index].recipe;
  const modalContainer = document.getElementById("modal-container");

  modalContainer.classList.replace("inactive", "active");

  document.getElementById("recipe-details-container").innerHTML =
    generateRecipeDetailsHTML(index);
};

const closeModalContainer = () => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.replace("active", "inactive");
};

const generateRecipeDetailsHTML = (index) => {
  const recipe = searchResults[index].recipe;

  // Start HTML creation
  let recipeDetailsHTML = '<div class="recipe">';

  // Add header
  recipeDetailsHTML += `
        <div class="recipe-header">
          <div class="text-container">
            <h2 class="title">${recipe.label}</h2>
            <h3 class="title">calories: ${Math.floor(recipe.calories)}</h3>
          </div>
          <div class="image-container">
            <img src="${recipe.image}" alt="img">
          </div>
        </div>
        `;

  // Add details
  recipe.ingredients.forEach((ingredient, index) => {
    recipeDetailsHTML += `
            <div class="recipe-detail">
              <div class="image-container">
                <img src="${ingredient.image}" alt="img">
              </div>
              <div class="text-container">
                <h4 class="title">${ingredient.text}</h4>
              </div>
            </div>
            `;
  });

  // End HTML creation
  recipeDetailsHTML += "</div>";

  return recipeDetailsHTML;
};
