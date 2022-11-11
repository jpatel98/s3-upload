import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
import express from 'express';
const app = express();
import { generateUploadURL } from './s3.js'

const PORT = process.env.PORT || 5050

app.use(cors());
app.use(express.static('public'))

app.get('/get-s3-url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({ url })
})

app.listen(PORT, () =>
    console.log(`Server listening on port: ${PORT} 🚀🚀`)
);