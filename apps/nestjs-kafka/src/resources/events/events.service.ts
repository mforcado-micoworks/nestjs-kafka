import { Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class EventsService {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  create(createEventDto: CreateEventDto) {
    this.kafkaClient.emit('create_event', createEventDto);
    return createEventDto;
  }
}
