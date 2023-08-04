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
exports.BackendAPI = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const entry_routes_1 = __importDefault(require("./routes/entry.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
class BackendAPI {
    constructor(port) {
        this.port = port;
        this.backendAPI = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.backendAPI.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.backendAPI.use((0, morgan_1.default)('dev'));
        this.backendAPI.use(express_1.default.json());
    }
    routes() {
        this.backendAPI.use(entry_routes_1.default);
        this.backendAPI.use('/collection', users_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.backendAPI.listen(this.backendAPI.get('port'));
            console.log('Server on port', this.backendAPI.get('port'));
        });
    }
}
exports.BackendAPI = BackendAPI;
