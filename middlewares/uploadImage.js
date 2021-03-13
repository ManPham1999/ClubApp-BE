const multer = require('multer');
var cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
require('dotenv').config();

// Cloudinary config
cloudinary.config({
	cloud_name: "di8ltzbb6",
	api_key: 585585284638688,
	api_secret: "QJoSrJaFO3cwDWtOvHN6m4viEWM",
});

try {
	const storage = new CloudinaryStorage({
		cloudinary: cloudinary,
		params: {
			folder: '',
			public_id: async (req, file) => {
				return 'SEP_Man/' + req.params.type + '/' + Date.now();
			},
		},
	});

	const upload = multer({
		storage,
	});
	module.exports = upload;
} catch (error) {
	console.log(error);
}
