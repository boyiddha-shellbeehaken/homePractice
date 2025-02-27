

// import connectDB from "@/app/lib/mongodb";
// import { Image } from "@/app/model/db";
// import { NextResponse } from "next/server";

// export const POST = async (request) => {
//     try {
//         await connectDB();

//         const data = await request.formData();
//         const file = data.get('file');
//         const content = data.get('content');

//         console.log("Received content:", content); // Debugging

//         if (!file || !content) {
//             console.error("Missing file or content:", { file: !!file, content: !!content });
//             return NextResponse.json({ success: false, error: "Missing file or content" });
//         }

//         const bufferData = await file.arrayBuffer();
//         const buffer = Buffer.from(bufferData);

//         const newImage = new Image({
//             name: file.name,
//             data: buffer,
//             contentType: file.type,
//             content: content
//         });

//         await newImage.save();

//         return NextResponse.json({ response: "Successfully Uploaded", success: true });
//     }
//     catch (error) {
//         console.error("Upload Error:", error);
//         return NextResponse.json({ response: "Failed", success: false, error: error.message });
//     }
// };









// import connectDB from "@/app/lib/mongodb";
// import { Image } from "@/app/model/db";
// import { NextResponse } from "next/server";

// export const POST = async (request) => {
//     try {
//         await connectDB();

//         const data = await request.formData();
//         const file = data.get("file");
//         const content = data.get("content");

//         if (!file || !content) {
//             return NextResponse.json({ success: false, message: "Missing file or content" });
//         }

//         // Convert the file to Base64
//         const bufferData = await file.arrayBuffer();
//         const base64Image = Buffer.from(bufferData).toString("base64");
//         const base64Data = `data:${file.type};base64,${base64Image}`;

//         // Save to MongoDB
//         const newImage = new Image({
//             name: file.name,
//             data: base64Data, // Store as Base64 string
//             contentType: file.type,
//             content: content
//         });

//         await newImage.save();

//         return NextResponse.json({ success: true, message: "Successfully Uploaded" });
//     } catch (error) {
//         console.error("Upload Error:", error);
//         return NextResponse.json({ success: false, message: "Upload Failed", error: error.message });
//     }
// };




import connectDB from "@/app/lib/mongodb";
import { Media } from "@/app/model/db";
import { NextResponse } from "next/server";

const convertToBase64 = async (file) => {
    const buffer = await file.arrayBuffer();
    return `data:${file.type};base64,${Buffer.from(buffer).toString("base64")}`;
};

export const POST = async (request) => {
    try {
        await connectDB();

        const data = await request.formData();
        const file = data.get("file");

        if (!file) return NextResponse.json({ success: false, message: "No file provided" });

        const base64Data = await convertToBase64(file);

        const newMedia = new Media({
            name: file.name,
            data: base64Data,
            contentType: file.type,
        });

        await newMedia.save();

        return NextResponse.json({ success: true, message: "File Uploaded Successfully" });
    } catch (error) {
        console.error("Upload Error:", error);
        return NextResponse.json({ success: false, message: "Upload Failed" });
    }
};
