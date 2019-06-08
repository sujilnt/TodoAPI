"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _task = _interopRequireDefault(require("./Resources/task/task.router"));

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
app.use('/api/task', _task.default);

const start = async () => {
  try {
    await (0, _connect.default)().then(async () => {
      app.listen(3030, () => {
        console.log(`REST API on http://localhost:3000/api`);
      });
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;