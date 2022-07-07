"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const body_parser_1 = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const app = (0, express_1.default)();
const PORT = 3000;
// mongoose connection
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost:27018', {
    useMongoClient: true
});
// bodyparser setup
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
(0, crmRoutes_1.default)(app);
// serving static files
app.use(express_1.default.static('public'));
app.get('/', (req, res) => res.send(`Node and express server is running on port ${PORT}`));
app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
