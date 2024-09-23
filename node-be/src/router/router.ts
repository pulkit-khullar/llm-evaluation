import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.json({
        Status: 'Healthy',
    });
});

export default router;
