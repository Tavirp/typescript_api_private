/* eslint-disable @typescript-eslint/no-floating-promises */
import { Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import StatisticsController, {
  type ISetDeviceInfoBody,
} from './StatisticsController';
import StatsModel from '../../database/models/StatsModel';

const StatisticsRouter = Router();

/**
 * POST
 */
StatisticsRouter.post('/deviceinfo', req => {
  const controller = new StatisticsController();
  return controller.setDeviceInfo(req, req.body as ISetDeviceInfoBody);
});


/**
 * GET
 */
StatisticsRouter.get('/byuserId', async (req, res) => {
  const userId = parseInt(req.query.userId as string);
  if (!userId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const todo = await StatsModel.findOne({ where: { userId: userId } });

  res.status(StatusCodes.OK).json({ todo });
});

export default StatisticsRouter;
