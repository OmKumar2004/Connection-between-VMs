const express = require('express');
const axios = require('axios');

const app = express();

app.get('/backend', (req, res) => {
        res.json({
                from: 'Backend VM',
                message: 'Hello Frontend'
        });
});

app.get('/call-frontend', async (req, res) =>{
                const response = await axios.get('http://192.168.75.129:4000/frontend');
                res.json(response.data);
});

app.listen(3000, '0.0.0.0', () => {
                console.log('Backend running on port 3000');
});
