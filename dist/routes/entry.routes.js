"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entry_controller_1 = require("../controllers/entry.controller");
const router = (0, express_1.Router)();
router.route('/').get(entry_controller_1.entry);
exports.default = router;
