import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    // res.send('Hello from the server!');
    res.json({ message: 'Hello from the server!' });
});
// we export the function to be called from our Electron app
export const startServer = () => {
    app.listen(PORT, () => {
        console.log(`[Server] Express server running on http://localhost:${PORT}`);
    });
};
//# sourceMappingURL=index.js.map