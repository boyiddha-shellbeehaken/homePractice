// import mongoose from 'mongoose';


// const ImageSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     data: {
//         type: Buffer,
//         required: true
//     },
//     contentType: {
//         type: String,
//         required: true
//     },
//     content: {
//         type: String,
//         required: true
//     }
// })

// export const Image = mongoose.models.Image || mongoose.model('Image',ImageSchema)









// import mongoose from "mongoose";

// const ImageSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     data: { type: String, required: true }, // Store as Base64 string
//     contentType: { type: String, required: true },
//     content: { type: String, default: "" } // Optional caption field
// });

// export const Image = mongoose.models.Image || mongoose.model("Image", ImageSchema);






import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    data: { type: String, required: true }, // Base64 String
    contentType: { type: String, required: true },
});

export const Media = mongoose.models.Media || mongoose.model("Media", MediaSchema);
