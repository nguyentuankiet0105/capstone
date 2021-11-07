const express = require("express");
const mysql = require("mysql");
const fs = require('fs');
const bodyParser = require('body-parser');



const app = express();
//const dataAttendace = require("./src/back-end/dataAttendace.json");
const dataClass = require("./src/back-end/dataClass.json");
const dataParent = require("./src/back-end/dataParent.json");
//const dataPosition = require("./src/back-end/dataPosition.json");
//const dataSchedule = require("./src/back-end/dataSchedule.json");
const dataStudent = require("./src/back-end/dataStudent.json");
const dataSubject = require("./src/back-end/dataSubject.json");
// const dataTeacher = require("./src/back-end/dataTeacher.json");
// const dataTeam = require("./src/back-end/dataTeam.json");
// const dataTeamreport = require("./src/back-end/dataTeamreport.json");
// const dataTranscript = require("./src/back-end/dataTranscript.json");
const dataUser = require("./src/back-end/dataUser.json");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'cte_db',
    port: "3306"
})

conn.connect();

// app.post('/register', (req, res)=>{
//     const sql = "INSERT INTO tb_user(username, password, type) VALUES ('trung', 'trung', 1)";
//     conn.query(sql, [username, password], (err, result)=>{
//         console.log(err);
//     });
// })

// app.get('/login', (req, res)=>{
//     const sql = "SELECT * FROM tb_user";
//     conn.query(sql, (err, result)=>{
//         if(err){
//             res.status(400).send('Error in database operation');
//         }else{
//             res.send(result);
//         }
//     });
// })

// app.get('/dataAttendance', (req, res)=>{
//     res.send(dataAttendance);
// })
app.get('/dataClass', (req, res)=>{
    res.send(dataClass);
})
app.get('/dataParent', (req, res)=>{
    res.send(dataParent);
})
// app.get('/dataPosition', (req, res)=>{
//     res.send(dataPosition);
// })
// app.get('/dataSchedule', (req, res)=>{
//     res.send(dataSchedule);
// })
app.get('/dataStudent', (req, res)=>{
    res.send(dataStudent);
})
app.get('/dataSubject', (req, res)=>{
    res.send(dataSubject);
})
// app.get('/dataTeacher', (req, res)=>{
//     res.send(dataTeacher);
// })
// app.get('/dataTeam', (req, res)=>{
//     res.send(dataTeam);
// })
// app.get('/dataTeamreport', (req, res)=>{
//     res.send(dataTeamreport);
// })
// app.get('/dataTranscript', (req, res)=>{
//     res.send(dataTranscript);
// })
app.get('/dataUser', (req, res)=>{
    res.send(dataUser);
})


app.listen(1337, ()=>{
    console.log("running on port 1337");
});