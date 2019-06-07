"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { connect } from './utils/db';
const todoData = [{
  id: "1",
  name: "Jogging Time",
  description: "Its time to Jog",
  created: "Mon May 13 2019 15:00:54",
  completed: true
}, {
  id: "2",
  name: "Cooking",
  description: "Cooking sdvsv",
  created: "Mon May 13 2019 15:00:54",
  completed: false
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
    //await connect()
    app.listen(3000, () => {
      console.log(`REST API on http://localhost:3000/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;