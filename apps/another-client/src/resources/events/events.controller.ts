import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { EventsService } from './events.service';

@Controller()
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @EventPattern('create_event')
  create(@Payload() createEventDto: any) {
    return this.eventsService.create(createEventDto);
  }
}
