import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { ValidationPipe } from "./pipe/validation.pipe"
import { Db } from "mongodb"


const start = async () => {
    try {
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)

        const config = new DocumentBuilder()
            .setTitle('Widget')
            .setDescription('The widget API description')
            .setVersion('Global')
            .addTag('widget')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
        app.enableCors()
        // app.useGlobalPipes(new ValidationPipe())
          await app.listen(PORT, () => console.log(`SERVER STARTED ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()