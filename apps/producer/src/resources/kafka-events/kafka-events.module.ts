import { Module } from '@nestjs/common';
import { KafkaEventsService } from './kafka-events.service';
import { KafkaEventsController } from './kafka-events.controller';

@Module({
  controllers: [KafkaEventsController],
  providers: [KafkaEventsService],
})
export class KafkaEventsModule {}
