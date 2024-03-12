const express = require('express')
const app = express()
const data = require('./data');
var cors = require('cors');
app.use(cors())

app.listen( process.env.PORT || 3000, () => {
    console.log("App listening on port 3000");
});


app.get('/', (req,res) => {
    res.send(data)
})

app.get('/env', (req,res) => {
    res.json(process.env.PORT);
})

//  - Biến process.env còn được dùng để lưu trữ các thông tin cần giữ bí mật trong quá trình phát triển ứng dụng 
// như username, password của database,....
// -  khi deploys lên server thì sẽ máy chủ sử dụng process.env.PORT (như render sử dụng cổng 1000)
 