const $ = require("jquery");

const listPlacesHTML = (placeID, name, location, image) => {
    const placesHTML =
    `
    <div id="list-places-container">
        <div id="places-card--${placeID}" class="card">
            <div class="card-header">
                <h4>${name}</h4>
                <button id="delete-btn--${placeID}">
                Delete Place
                </button>
            </div>
            <div class="card-body">
                <h6>${location}</h6>
                <img class="card-img-bottom" src="${image}" alt="${name}">
            </div>
        </div>
    </div>
    `
    $("#main-content").append(placesHTML);
}

module.exports = listPlacesHTML;

