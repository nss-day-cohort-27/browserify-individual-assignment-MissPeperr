const dbCalls = Object.create(null, {
    getPlaces: {
        value: () => {
            return fetch("http://localhost:8088/places")
            .then(response => response.json());
        }
    },
    saveNewPlace: {
        value: (places) => {
            return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(places)
            })
            .then(response => response.json())
        }
    },
    deletePlace: {
        value: (placeID) => {
            return fetch(`http://localhost:8088/places/${placeID}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    }
})

module.exports = dbCalls;