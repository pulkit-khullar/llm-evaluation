"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluateController_1 = require("../controller/evaluateController");
const evaluateValidation_1 = require("../validation/evaluateValidation");
const router = (0, express_1.Router)();
router.get('/health', (req, res) => {
    res.json({
        Status: 'Healthy',
    });
});
router.post('/evaluate', evaluateValidation_1.validateEvaluation, evaluateController_1.evaluateBot);
exports.default = router;
