

export const s3Config = {
  bucketName: import.meta.env.VITE_S3_BUCKET,
  region: import.meta.env.VITE_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
};