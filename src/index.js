import express from 'express';
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use('/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});