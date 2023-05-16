const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storagePostImage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/posts');
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.' + extension)[0];
        callback(null, name + Date.now() + '.' + extension);
    }
});

const multerPostImage = multer({ storage: storagePostImage }).single('postImage');

module.exports = {
    multerPostImage,
};