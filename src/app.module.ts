import { Module } from '@nestjs/common';
import { KafkaModule } from './http/kafka/kafka.module';
import { KafkaMicroserviceModule } from './non-http/kafka-microservice/kafka-microservice.module';

@Module({
  imports: [KafkaModule, KafkaMicroserviceModule],
})
export class AppModule {}
