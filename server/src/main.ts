import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"


async function start() {
    const app = await NestFactory.create(AppModule);
    
    app.enableCors();
    await app.listen(process.env.PORT || 5000);
  }
  start();