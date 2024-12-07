const S3_BUCKET = import.meta.env.VITE_S3_BUCKET;
const REGION = import.meta.env.VITE_REGION;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const s3Config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
};