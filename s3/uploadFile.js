import { s3Config } from '../s3-config';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Initialize S3 Client
const s3Client = new S3Client({
    region: s3Config.region,
    credentials: {
        accessKeyId: s3Config.accessKeyId,
        secretAccessKey: s3Config.secretAccessKey,
    },
});

// Generate a unique name with a folder path based on the file type
const generateUniqueFileName = (file) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // e.g., 2025-01-07T10-52-27-123Z
    const extension = file.name.substring(file.name.lastIndexOf('.')); // Get file extension
    let folder = '';

    // Determine folder based on file type
    if (file.type.startsWith('image/')) {
        folder = 'images';
    } else if (file.type.startsWith('video/')) {
        folder = 'courses';
    } else if (['.pdf', '.doc', '.docx'].includes(extension.toLowerCase())) {
        folder = 'resumes'; // Folder for resume files
    } else {
        folder = 'others'; // Default folder for other types
    }

    return `${folder}/upload-${timestamp}${extension}`; // e.g., resumes/upload-2025-01-07T10-52-27-123Z.pdf
};

// Upload the file to S3
const uploadFile = async (file) => {
    if (!file) {
        console.error('File is undefined or null.');
        throw new Error('No file provided for upload.');
    }

    try {
        // Generate a unique file name with folder path
        const uniqueFileName = generateUniqueFileName(file);

        // Upload the file to S3
        const params = {
            Bucket: s3Config.bucketName, // Replace with your bucket name
            Key: uniqueFileName, // File path in S3
            Body: file, // File content
            ContentType: file.type, // MIME type
        };

        const command = new PutObjectCommand(params);

        const response = await s3Client.send(command);

        console.log('File uploaded successfully:', response);

        // Construct and return the file URL
        const fileUrl = `https://${s3Config.bucketName}.s3.${s3Config.region}.amazonaws.com/${uniqueFileName}`;
        return fileUrl;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export default uploadFile;
