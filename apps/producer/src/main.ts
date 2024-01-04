import { NestFactory } from '@nestjs/core';
import { ProducerModule } from './producer.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProducerModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'my-kafka',
          brokers: ['localhost:9094'],
        },
        consumer: {
          groupId: 'my-kafka-consumer',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
