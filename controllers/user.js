const bcrypt = require("bcryptjs");
const { layout } = require("../utils");
const { Member } = require("../models");

const newUser = (req, res) => {
  res.render("home", {
    locals: {
      title: "Sign up",
    },
    ...layout,
  });
};

const processNewUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  if (username == "" || password == "") {
    // informs user of required info
    console.log("username or password is blank", req.baseUrl);
    res.redirect(`${req.baseUrl}/home`);
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
      const newUser = await Member.create({
        username,
        hash,
      });
      res.redirect(`${req.baseUrl}/create-acct`);
    } catch (e) {
      // e.name will be "SequelizeUniqueConstraintError"
      console.log(e.name);
      if (e.name === "SequelizeUniqueConstraintError") {
        // We should tell the user that the username is taken
        // and then redirect them
        res.render("create-acct", {
          locals: {
            message: "That username is taken. Please try again.",
          },
        });
      }
      res.redirect(`${req.baseUrl}/home`);
    }
  }
};

const login = (req, res) => {
  res.render("home", {
    locals: {
      title: "Log in",
    },
    ...layout,
  });
};

const processLogin = async (req, res) => {
  const { username, password } = req.body;
  // find user by username
  const user = await Member.findOne({
    where: {
      username,
    },
  });
  if (user) {
    console.log("valid user...checking password");
    const isValid = bcrypt.compareSync(password, user.hash);
    if (isValid) {
      console.log("password is good!");
      req.session.user = {
        username,
      };
      req.session.save(() => {
        res.redirect("/member-profile");
      });
    } else {
      console.log("but password is wrong");
      res.redirect(`${req.baseUrl}/home`);
    }
  } else {
    console.log("not a valid user");
    res.redirect(`${req.baseUrl}/home`);
  }
};

const logout = (req, res) => {
  console.log("logging out...");
  req.session.destroy(() => {
    // deleting session:
    res.redirect("/home");
  });
};

module.exports = {
  newUser,
  processNewUser,
  login,
  processLogin,
  logout,
};
