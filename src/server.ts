import express from "express"

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})


app.listen(3000, function () {
    console.log("App de Exemplo escutando na porta 3000!");
});
    