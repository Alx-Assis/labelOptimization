"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
// import read from '../index'
const read = require('../index.js');
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const server = (0, express_1.default)();
let PORT = process.env.PORT || 3000;
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.post('/api/v1/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    let { Path_1, Path_2 } = request.body;
    read();
    return response.json({ menssage: "etiquetas geradas xom sucesso - pasta output" });
}));
server.listen(PORT, () => {
    console.log(`servidOr rodando  na porta ${PORT}`);
});
