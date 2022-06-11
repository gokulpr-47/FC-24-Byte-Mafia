require('dotenv').config()
//Packages
const express = require("express");
const bodyparser = require('body-parser')
const mongoose  = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport")
const session = require("express-session");

//Requiring Routes
const authRoutes = require("./routes/auth")

let dbUrl; 
if(process.env.NODE_ENV !== "production"){
    dbUrl = "mongodb://localhost:27017/test"
}else{
    dbUrl=process.env.DBURL
}

//DB Connection
mongoose.connect(dbUrl)

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    cors({
      origin: "https://62a41549a32b4d5375b0dfd2--zesty-axolotl-e7aeb7.netlify.app",
      credentials: true,
      methods: ["GET", "POST"],
    })
  );

const secret = process.env.SECRET;

app.use(cookieParser(secret));
app.set("trust proxy", 1);
app.use(
  session({
    name: "Session1.0",
    secret,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: dbUrl,
      secret,
      touchAfter: 24 * 60 * 60,
    }),
    cookie: {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 100 * 60 * 60 * 24 * 7,
      domain: "fc-24.herokuapp.com",
      sameSite: "none",
      secure: true,
    },
  })
);

// passport initialisation
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


//Routes
app.use("/", authRoutes)

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Listening at port ${port}`));