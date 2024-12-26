import AWS from 'aws-sdk'
import { s3Config } from '../s3-config'

// Configure AWS SDK
AWS.config.update({
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey,
    region: s3Config.region,
});

// Create an S3 instance
const s3 = new AWS.S3()

// Generate a unique name with a folder path based on the file type
const generateUniqueFileName = (file) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-') // e.g., 2024-11-29T12-45-30-123Z
    const extension = file.name.substring(file.name.lastIndexOf('.')) // Get file extension
    let folder = ''

    // Determine folder based on file type
    if (file.type.startsWith('image/')) {
        folder = 'images'
    } else if (file.type.startsWith('video/')) {
        folder = 'courses'
    } else if (['.pdf', '.doc', '.docx'].includes(extension.toLowerCase())) {
        folder = 'resumes' // Folder for resume files
    } else {
        folder = 'others' // Default folder for other types
    }

    return `${folder}/upload-${timestamp}${extension}` // e.g., resumes/upload-2024-11-29T12-45-30-123Z.pdf
}

const uploadFile = async (file) => {
    if (!file) {
        console.error('File is undefined or null.')
        throw new Error('No file provided for upload.')
    }

    try {
        // Generate a unique file name with folder path
        const uniqueFileName = generateUniqueFileName(file)

        // Upload the file to S3
        const params = {
            Bucket: s3Config.bucketName, // Replace with your bucket name
            Key: uniqueFileName, // File path in S3
            Body: file, // File content
            ContentType: file.type, // MIME type
            ACL: 'bucket-owner-full-control', // Specify access control
        }

        const response = await s3.upload(params).promise()

        console.log('File uploaded successfully:', response)
        return response.Location // S3 URL of the uploaded file
    } catch (error) {
        console.error('Error uploading file:', error)
        throw error
    }
}

export default uploadFile
