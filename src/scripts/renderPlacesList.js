const listPlaces = require("listPlacesHTML");
const placesData = require("DataManager");

const renderPlaces = Object.create(null, {
getPlaces: {
    value: () => {
        placesData.getPlaces()
        .then((response) => {
            response.forEach(place => {
                listPlaces(place.id, place.name, place.location, place.image);
            })
        })
    }
}
})

module.exports = renderPlaces;