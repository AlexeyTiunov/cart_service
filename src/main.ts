import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';

import * as helmet from 'helmet';

import { AppModule } from './app.module';
import {Callback, Context, Handler} from "aws-lambda";

let server: Handler;
//const port = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });


  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
  //await app.listen(port);
}
export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};