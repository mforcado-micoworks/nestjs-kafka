import { NestFactory } from '@nestjs/core';
import { AnotherClientModule } from './another-client.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AnotherClientModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'kafka-app',
          brokers: ['kafka:9092'],
        },
        consumer: {
          groupId: 'kafka-app-consumer',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
