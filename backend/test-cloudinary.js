import { config } from "dotenv";
import cloudinary from "./src/lib/cloudinary.js";

config();

const testCloudinary = async () => {
  try {
    console.log("Testing Cloudinary configuration...");
    console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log("API Key:", process.env.CLOUDINARY_API_KEY);
    console.log("API Secret:", process.env.CLOUDINARY_API_SECRET ? "Present" : "Missing");
    
    // Test with a simple base64 image
    const testImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    
    console.log("Attempting to upload test image...");
    const uploadResponse = await cloudinary.uploader.upload(testImage);
    console.log("Upload successful:", uploadResponse.secure_url);
    
  } catch (error) {
    console.error("Cloudinary test failed:", error.message);
  }
};

testCloudinary(); 