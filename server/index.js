const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// create connection to mysql database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "cte_db",
  port: "3306",
});

//connnect to db
conn.connect();


app.listen(1337, () => {
  console.log("running on port 1337");
});


//query getting max of user_id
const sql = "SELECT MAX(user_id) FROM tb_user";
const getID = conn.query(sql);




//insert user data into database
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    
    const student_id = "STU" + getID;
  conn.query(
    "INSERT INTO tb_user(username, password) VALUES (?, ?);",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
  conn.query(
    "INSERT INTO tb_student_info(student_id, first_name, last_name, email) VALUES (?, ?, ?, ?) WHERE tb_user.user_id = tb_student_info.user_id",
    [student_id, first_name, last_name, email],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const type = req.body.type;

  const sql = "SELECT * FROM tb_user WHERE username = ? AND password = ?";
  conn.query(sql, [username, password, type], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      res.send({result: result});
    } else {
      res.send({ message: "wrong username or password!!" });
    }
  });
});

app.post("/schedule", (req, res)=>{
  const lesson = req.body.lesson;
  const dayofweek = req.body.dayofweek;
  const subject_id = req.body.subject_id;
  const subject_name = req.body.subject_name;

  const schedule = "SELECT lesson, sum(Monday) AS 'Monday', sum(Tuesday) AS 'Tuesday', sum(Wednesday) AS 'Wednesday', sum(Thursday) AS 'Thursday', sum(Friday) AS 'Friday' FROM (sub_schedule) WHERE class_id = '3A' GROUP BY lesson;";
  conn.query(schedule, (err, result)=>{
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    }
  });
})




