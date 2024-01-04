import { Module } from '@nestjs/common';
import { EventsModule } from './resources/events/events.module';

@Module({
  imports: [EventsModule],
})
export class AnotherClientModule {}
