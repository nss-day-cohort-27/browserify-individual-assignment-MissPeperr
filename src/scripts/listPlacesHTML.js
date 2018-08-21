const $ = require("jquery");
const B = require("bootstrap");
const listPlacesHTML = (placeID, name, location, image) => {
    const placesHTML =
    `
        <div id="places-card--${placeID}" class="card">
            <div class="card-header">
                <h4>${name}</h4>
                <button class="delete-btn" id="delete-btn--${placeID}">
                Delete Place
                </button>
            </div>
            <div class="card-body">
                <h6>${location}</h6>
                <img class="card-img-bottom" src="${image}" alt="${name}">
            </div>
        </div>
    `
    $("#list-places-container").append(placesHTML);
}

module.exports = listPlacesHTML;

