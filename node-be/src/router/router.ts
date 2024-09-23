import { Router, Request, Response } from 'express';
import { evaluateBot } from '../controller/evaluateController';
import { validateEvaluation } from '../validation/evaluateValidation';

const router: Router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.json({
        Status: 'Healthy',
    });
});

router.post('/evaluate', validateEvaluation, evaluateBot)

export default router;
