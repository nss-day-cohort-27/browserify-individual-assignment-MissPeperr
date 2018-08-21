const $ = require("jquery");
const B = require("bootstrap");
const placesData = require("DataManager");
const placesInput = require("inputFormHTML");
const renderPlacesList = require("renderPlacesList");

placesInput();
renderPlacesList.getPlaces();

$("body").click((event)=>{
    if(event.target.id === "save-new-place-btn"){
        console.log("button works!");
        const newPlace = {
            name: $("#new-place-input").val(),
            location: $("#new-location-input").val(),
            image: $("#new-image-input").val()
        }
        placesData.saveNewPlace(newPlace)
        .then(()=>{
            $("#new-place-input").val("");
            $("#new-location-input").val("");
            $("#list-places-container").val("");
            renderPlacesList.getPlaces();
        })
    }

    if(event.target.id.includes("delete-btn--")){
        const placeID = event.target.id.split("--")[1]
        $(`#places-card--${placeID}`).remove();
        placesData.deletePlace(placeID);
    }

})
