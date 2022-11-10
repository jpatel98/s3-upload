import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
import express from 'express';
const app = express();

const PORT = process.env.PORT || 5050

app.use(cors());
app.use(express.static('public'))

app.listen(PORT, () =>
    console.log(`Server listening on port: ${PORT} 🚀🚀`)
);