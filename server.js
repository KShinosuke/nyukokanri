const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));

app.post('/upload', (req, res) => {
    const imageData = req.body.imageData;
    // 画像処理を行い結果を生成
    res.json({ result: '画像処理結果' });
});

app.listen(3000, () => {
    console.log('サーバーが起動しました http://localhost:3000');
});
