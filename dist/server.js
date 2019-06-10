"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _User = require("./Resources/User/User.modal");

var _task = require("./Resources/task/task.modal");

var _auth = require("./utils/auth");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _task2 = _interopRequireDefault(require("./Resources/task/task.router"));

var _User2 = _interopRequireDefault(require("./Resources/User/User.router"));

var _connect = _interopRequireDefault(require("./Resources/connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.app = app;
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev'));
app.post('/signup', _auth.signup);
app.post('/signin', _auth.signin);
app.use('/api', _auth.protect);
app.use('/api/task', _task2.default);
app.use('/api/user', _User2.default);

const start = async () => {
  try {
    await (0, _connect.default)().then(async () => {
      let s1 = await _User.User.find({});
      console.log("check", s1);
      app.listen(3030, () => {
        console.log(`REST API on http://localhost:3030/api`);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;