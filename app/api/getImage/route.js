// import { NextResponse } from "next/server"
// import connectDB from "@/app/lib/mongodb";
// import { Image } from "@/app/model/db";

// export const GET = async () => {
//     try {
//         await connectDB();

//         const images = await Image.find().select('name data contentType content')

//         return NextResponse.json({success:true, images})
//     }
//     catch(error){
//         NextResponse.json({success:false, error: "Failed"})
//     }
// }




// import connectDB from "@/app/lib/mongodb";
// import { Image } from "@/app/model/db";
// import { NextResponse } from "next/server";

// export const GET = async () => {
//     try {
//         await connectDB();

//         const images = await Image.find(); // Fetch all images
//         return NextResponse.json({ success: true, images });
//     } catch (error) {
//         console.error("Fetch Error:", error);
//         return NextResponse.json({ success: false, message: "Fetch Failed", error: error.message });
//     }
// };




import connectDB from "@/app/lib/mongodb";
import { Media } from "@/app/model/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        
        const mediaFiles = await Media.find(); // Fetch all media from MongoDB
        
        return NextResponse.json({ success: true, media: mediaFiles });
    } catch (error) {
        console.error("Fetch Error:", error);
        return NextResponse.json({ success: false, message: "Failed to retrieve media" });
    }
};

