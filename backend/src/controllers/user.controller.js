const config = require("../config/key");
const jwt = require('jsonwebtoken');

const User = require("../models/user.model");

const register = async (req, res) =>
{
  const { firstname, lastname, email, password, ...other } = req.body;

  if (!firstname || !lastname || !email || !password)
  {
    res.json({ success: false, msg: 'Please input valid values.' });
  } else
  {
    let newUser = new User({
      firstname, lastname, email, password
    });

    newUser.save().then(
      savedUser => res.send({
        success: true,
        user: savedUser
      })
    ).catch(err =>
    {
      console.log(err)
      res.status(404).send(err)
    }
    )
  }
}

const signin = async (req, res) =>
{
  const { email, password, ...other } = req.body;

  if (!email || !password)
  {
    res.json({ success: false, msg: 'Please input valid values.' });
  }

  let user = await User.findOne({ email: email })

  if (!user)
  {
    res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
  }
  else
  {
    // check if password matches
    user.comparePassword(password, (err, isMatch) =>
    {
      if (isMatch && !err)
      {
        // if user is found and password is right create a token
        let token = jwt.sign({
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          _id: user._id
        }, config.secret);
        // return the information including token as JSON
        res.json({ user: user, serviceToken: token });
      } else
      {
        res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
      }
    });
  }
}

const myinfo = async (req, res) =>
{
  res.json({ user: req.user })
}

module.exports = { register, signin, myinfo };