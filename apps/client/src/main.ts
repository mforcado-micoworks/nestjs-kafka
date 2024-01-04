import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClientModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'kafka-client',
          brokers: ['localhost:9094'],
        },
        consumer: {
          groupId: 'kafka-client-consumer',
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
