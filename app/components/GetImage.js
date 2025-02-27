// /* eslint-disable @next/next/no-img-element */
// 'use client'

// import { useEffect, useState } from "react";

// const GetImage = () => {
//     const [images, setImages] = useState([]);
//     useEffect(() => {
//         const fetchImages = async () => {
//             try{
//                 const response = await fetch('/api/getImage');
//                 const result = await response.json();
//                 console.log('Fetched images:', result)
//                 if(result.success){
//                     setImages(result.images);
//                 }
//                 else {
//                     console.log('Error')
//                 }

//             }
//             catch(error){
//                 console.log(error)
//             }
//         };
//         fetchImages();
//     }, [])
//   return (
//     <>
//      <h2>Get Image From Mongo DB</h2>
//      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {
//             images.map((image) => (
//                 <div key={image._id} style={{ margin: '10px'}}>
//                     <img 
//                         src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`}
//                         alt={image.name}
//                         style={{ maxWidth: '200px', maxHeight: '200px'}}
//                     />
//                     <p>{image.name}</p>
//                     <h2>{image.content}</h2>
//                 </div>
//             ))
//         }
//      </div>
//     </>
//   );
// }

// export default GetImage;


// 'use client';

// import { useEffect, useState } from "react";

// const GetImage = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await fetch("/api/getImage");
//         const data = await res.json();

//         if (data.success) {
//           setImages(data.images);
//         }
//       } catch (error) {
//         console.error("Fetch Error:", error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div>
//       <h2>Uploaded Images</h2>
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         {images.map((img) => (
//           <div key={img._id}>
//             <img src={img.data} alt={img.name} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
//             <p>{img.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GetImage;




"use client";
import { useEffect, useState } from "react";

const MediaGallery = () => {
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const response = await fetch("/api/getImage");
                const result = await response.json();

                if (result.success) {
                    setMediaList(result.media);
                } else {
                    console.error("Failed to fetch media");
                }
            } catch (error) {
                console.error("Error fetching media:", error);
            }
        };

        fetchMedia();
    }, []);

    return (
        <div>
            <h2>Media Gallery</h2>
            {mediaList.length === 0 && <p>No media found.</p>}

            {mediaList.map((media, index) => (
                <div key={index}>
                    <p>{media.name}</p>
                    {media.contentType.startsWith("image/") ? (
                        <img src={media.data} alt={media.name} style={{ width: "200px" }} />
                    ) : media.contentType.startsWith("audio/") ? (
                        <audio controls>
                            <source src={media.data} type={media.contentType} />
                        </audio>
                    ) : media.contentType.startsWith("video/") ? (
                        <video controls width="300">
                            <source src={media.data} type={media.contentType} />
                        </video>
                    ) : (
                        <p>Unsupported file type</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MediaGallery;
