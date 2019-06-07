"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _tasks = _interopRequireDefault(require("./Database/tasks/tasks"));

var _connect = _interopRequireDefault(require("./Database/connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const todoData = [{
  uid: "1",
  name: "Jogging Time",
  description: "Its time to Jog",
  archived: true
}, {
  uid: "2",
  name: "Cooking",
  description: "Cooking sdvsv",
  archived: false
}];
const app = (0, _express.default)();
exports.app = app;
app.disable('x-powered-by');
app.get("/api", (req, res) => {
  res.send(todoData);
});
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev'));

const start = async () => {
  try {
    await (0, _connect.default)().then(async () => {
      const tasksList = await (0, _tasks.default)().create({
        uid: "1",
        name: "Jogging Time",
        description: "Its time to Jog",
        archived: true
      });
      console.log(tasksList);
      app.listen(3000, () => {
        console.log(`REST API on http://localhost:3000/api`);
      });
    });
    /*
    *
    * */
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;