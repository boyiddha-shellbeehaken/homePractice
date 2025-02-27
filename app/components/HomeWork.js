// // 

// 'use client';

// import { useState } from "react";

// const HomeWork = () => {
//   const [file, setFile] = useState(null);
//   const [content, setContent] = useState("");
//   const [imagePreview, setImagePreview] = useState(null); // Store image preview URL

//   const handleChange = (e) => {
//     setContent(e.target.value);
//     e.target.style.height = "auto";
//     e.target.style.height = `${e.target.scrollHeight}px`;
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files?.[0];

//     if (selectedFile) {
//       setFile(selectedFile);
      
//       // Create a preview URL for the image
//       const previewUrl = URL.createObjectURL(selectedFile);
//       setImagePreview(previewUrl);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please select a File");
//       return;
//     }

//     const data = new FormData();
//     data.append("file", file);
//     data.append("content", content);

//     try {
//       let result = await fetch("/api/upload", {
//         method: "POST",
//         body: data,
//       });

//       result = await result.json();

//       if (result.success) {
//         alert("File Uploaded Successfully");

//         // Reset the form after successful upload
//         setFile(null);
//         setContent("");
//         setImagePreview(null);
//       } else {
//         alert("File Upload Failed");
//       }
//     } catch (error) {
//       console.error("Upload Error:", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input type="file" name="file" accept="image/*" onChange={handleFileChange} /><br /><br />
        
//         {/* Show Image Preview if an image is selected */}
//         {imagePreview && (
//           <img src={imagePreview} alt="Preview" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
//         )}
        
//         <textarea
//           value={content}
//           onChange={handleChange}
//           placeholder="What's happening?!"
//           style={{ overflow: "hidden" }}
//         />
//         <button type="submit">Upload</button>
//       </form>
//     </>
//   );
// };

// export default HomeWork;


// 'use client';

// import { useState } from "react";

// const HomeWork = () => {
//   const [file, setFile] = useState(null);
//   const [content, setContent] = useState("");
//   const [imagePreview, setImagePreview] = useState(null); // Store image preview

//   const handleChange = (e) => {
//     setContent(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files?.[0];

//     if (selectedFile) {
//       setFile(selectedFile);

//       // Show image preview
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please select a File");
//       return;
//     }

//     const data = new FormData();
//     data.append("file", file);
//     data.append("content", content);

//     try {
//       let result = await fetch("/api/upload", {
//         method: "POST",
//         body: data,
//       });

//       result = await result.json();

//       if (result.success) {
//         alert("File Uploaded Successfully");

//         // Reset form
//         setFile(null);
//         setContent("");
//         setImagePreview(null);
//       } else {
//         alert("File Upload Failed");
//       }
//     } catch (error) {
//       console.error("Upload Error:", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input type="file" name="file" accept="image/*" onChange={handleFileChange} />
//         <br /><br />

//         {/* Show Image Preview */}
//         {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}

//         <textarea
//           value={content}
//           onChange={handleChange}
//           placeholder="What's happening?!"
//         />
//         <button type="submit">Upload</button>
//       </form>
//     </>
//   );
// };

// export default HomeWork;



"use client";
import { useState } from "react";

const HomeWork = () => {
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file");
            return;
        }

        const data = new FormData();
        data.append("file", file);

        try {
            const result = await fetch("/api/upload", {
                method: "POST",
                body: data,
            });

            const response = await result.json();
            alert(response.message);
        } catch (error) {
            console.error("Upload Error:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="audio/*,video/*" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Upload</button>
            </form>
        </>
    );
};

export default HomeWork;
