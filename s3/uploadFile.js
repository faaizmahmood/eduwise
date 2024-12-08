import S3 from 'react-s3'
import { s3Config } from '../s3-config'

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

        // Create a new file object with the unique name
        const renamedFile = new File([file], uniqueFileName, { type: file.type })

        // Upload the renamed file with the ACL explicitly set
        const response = await S3.uploadFile(renamedFile, {
            ...s3Config,
            ACL: 'bucket-owner-full-control', // Explicitly specify the ACL
        })

        console.log('File uploaded successfully:', response)
        return response.location // S3 URL of the uploaded file
    } catch (error) {
        console.error('Error uploading file:', error)
        throw error
    }
}

export default uploadFile
