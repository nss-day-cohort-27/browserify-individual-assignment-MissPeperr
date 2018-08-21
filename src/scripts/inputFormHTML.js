const $ = require("jquery");
const B = require("bootstrap");


const inputFormHTML = () => {
    const formHTML =
    `
    <div id="places-form">
        <h3>Add a new place!</h3>

        <button id="new-place-button" type="button" class="btn" data-toggle="modal" data-target="#input-new-place-modal"><i class="fas fa-plus"></i></button>

        <div id="input-new-place-modal" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Where Did You Go?</h5>
                    <button id="close-modal-btn" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h6>Place:</h6>
                    <input id="new-place-input" class="form-control mb-2" type="text" placeholder="Oh, The Places I've Been!">
                    <h6>Location:</h6>
                    <input id="new-location-input" class="form-control mb-2" type="text" placeholder="Whoville">
                    <h6>URL of Image:</h6>
                    <input id="new-image-input" class="form-control mb-2" type="text" placeholder="www\.example\.com/example_image_url">
                </div>
                <div class="modal-footer">
                    <button id="save-new-place-btn" type="button" data-dismiss="modal" class="btn btn-info">
                    I went there!
                    </button>
                </div>
                </div>
            </div>
        </div>

    </div>
    
    `
    $("#main-content").append(formHTML);
}

module.exports = inputFormHTML;