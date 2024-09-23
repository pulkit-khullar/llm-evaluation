"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./router/router"));
// Setup application ENV's
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '8000', 10);
// Single router for entire application
app.use('/api', router_1.default);
app.listen(port, () => {
    console.log(`Application is running on PORT : ${port}`);
});
