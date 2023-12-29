import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create Hybrid app that handles HTTP and Non-HTTP.
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
