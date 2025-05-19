const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
app.use(express.static('public'));
app.post('/soma' , (req,res) => {
    const{a,b} = req.body;
})
app.listen(port , () => {
    console.log('serividor rodando em http://localhost:${port}');
});
