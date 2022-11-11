import dotenv from 'dotenv'
import aws from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'
dotenv.config()

const region = process.env.AWS_BUCKET_REGION
const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

export async function generateUploadURL() {

  const imageName = uuidv4()
  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })

  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}