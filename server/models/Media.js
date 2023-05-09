const { Schema, model } = require('mongoose');

const mediaSchema = new Schema({

    mediaId: {
        type: String,
        required: true,
    },

    mediaType: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

});

const Media = model('Media', mediaSchema);

module.exports = {Media, mediaSchema}