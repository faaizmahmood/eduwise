import S3 from 'react-s3';
import { s3Config } from '../s3-config';

// Generate a unique name with a folder path based on the file type
const generateUniqueFileName = (file) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // e.g., 2024-11-29T12-45-30-123Z
  const extension = file.name.substring(file.name.lastIndexOf('.')); // Get file extension
  const folder = file.type.startsWith('image/') ? 'images' : 'videos'; // Determine folder based on file type
  return `${folder}/upload-${timestamp}${extension}`; // e.g., images/upload-2024-11-29T12-45-30-123Z.png
};

const uploadFile = async (file) => {
  try {
    // Generate a unique file name with folder path
    const uniqueFileName = generateUniqueFileName(file);

    // Create a new file object with the unique name
    const renamedFile = new File([file], uniqueFileName, { type: file.type });

    // Upload the renamed file with the ACL explicitly set
    const response = await S3.uploadFile(renamedFile, {
      ...s3Config,
      ACL: 'bucket-owner-full-control', // Explicitly specify the ACL
    });

    console.log('File uploaded successfully:', response);
    return response.location; // S3 URL of the uploaded file
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
};

export default uploadFile;
