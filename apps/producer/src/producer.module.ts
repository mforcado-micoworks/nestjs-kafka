import { Module } from '@nestjs/common';
import { KafkaEventsModule } from './resources/kafka-events/kafka-events.module';

@Module({
  imports: [KafkaEventsModule],
})
export class ProducerModule {}
