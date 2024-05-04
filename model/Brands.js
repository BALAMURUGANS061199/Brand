// const mongoose = require('mongoose')

// const schema =mongoose.Schema

// const Brands =new schema({
//     userId:1001,
//     result:[{
//         brandId:uuidv4(),
//         name:String,
//         image:
//     }]
// })

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    userId: { type: Number, default: 1001 },
    result: [{
        brandId: { type: String, default: uuidv4 },
        name: { type: String },
        image: { type: String } // Assuming you store image URLs
    }]
});

const BrandModel = mongoose.model('Brand', BrandSchema);

// Example function to handle image upload and URL insertion
async function uploadImageAndInsertURL(userId, brandName, imageUrl) {
    try {
        // Upload image and get URL (implementation specific to your system)
        const uploadedImageUrl = await uploadImage(imageUrl);

        // Create a new brand object
        const newBrand = new BrandModel({
            userId: userId,
            result: [{
                name: brandName,
                image: uploadedImageUrl
            }]
        });

        // Save the new brand to the database
        const savedBrand = await newBrand.save();
        console.log('Brand saved:', savedBrand);
    } catch (error) {
        console.error('Error uploading image and inserting URL:', error);
    }
}

// Example usage
const userId = 1001;
const brandName = 'Example Brand';
const imageUrl = 'https://example.com/image.jpg';
uploadImageAndInsertURL(userId, brandName, imageUrl);

module.exports ={
    uploadImageAndInsertURL
}
