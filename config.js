const config = {
  bucketName: import.meta.env.VITE_S3_BUCKET, // Replace with environment variable
  region: import.meta.env.VITE_REGION, // Replace with environment variable
  accessKeyId: import.meta.env.VITE_ACCESS_KEY, // Replace with environment variable
  secretAccessKey: import.meta.env.VITE_SECRET_KEY, // Replace with environment variable
};

export default config;