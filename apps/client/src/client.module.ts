import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { EventsModule } from './resources/events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
