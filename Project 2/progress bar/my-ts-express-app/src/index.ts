import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from "cors"

const app = express();
const PORT = 5000;
app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
