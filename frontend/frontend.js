const express = require('express');
const axios = require('axios');

const app = express();

app.get('/frontend', (req,res) => {
                res.json({
                        from: 'FRontend VM',
                        message: 'Hello Backend'
                });
});

app.get('/call-backend', async (req, res) => {
                const response = await axios.get('http://192.168.75.128:3000/backend');
                res.json(response.data);
});

app.listen(4000, '0.0.0.0', () => {
        console.log('FRontend running on port 4000');
});
