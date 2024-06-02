const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SMTPサーバーの設定
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // SMTPサーバーのホスト名
    port: 587, // SMTPポート
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'yourusername@example.com', // SMTPサーバーのユーザー名
        pass: 'yourpassword' // SMTPサーバーのパスワード
    }
});

app.post('/submit', (req, res) => {
    // 申請の処理を行う
    const name = req.body.name;
    const purpose = req.body.purpose;
    const date = req.body.date;

    // ここで申請を承認し、メッセージを返す処理を追加する

    // メールの送信
    const mailOptions = {
        from: 'yourusername@example.com', // 送信元のメールアドレス
        to: req.body.email, // 送信先のメールアドレス（申請者のメールアドレス）
        subject: '入構申請の承認', // メールの件名
        text: `申請が承認されました。日時: ${date}, 入構目的: ${purpose}` // メールの本文
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('送信エラー:', error);
        } else {
            console.log('メールが送信されました:', info.response);
        }
    });

    res.json({ message: '申請が受け付けられました。' });
});

app.listen(port, () => {
    console.log(`サーバーがポート ${port} で起動しました。`);
});
