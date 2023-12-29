import { Module } from '@nestjs/common';
import { KafkaMicroserviceService } from './kafka-microservice.service';
import { KafkaMicroserviceController } from './kafka-microservice.controller';

@Module({
  controllers: [KafkaMicroserviceController],
  providers: [KafkaMicroserviceService],
})
export class KafkaMicroserviceModule {}
