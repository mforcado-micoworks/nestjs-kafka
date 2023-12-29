import { Module } from '@nestjs/common';
import { KafkaModule } from './http/kafka/kafka.module';
import { KafkaMicroserviceModule } from './non-http/kafka-microservice/kafka-microservice.module';
import { ClientModule } from './websockets/client/client.module';

@Module({
  imports: [KafkaModule, KafkaMicroserviceModule, ClientModule],
})
export class AppModule {}
