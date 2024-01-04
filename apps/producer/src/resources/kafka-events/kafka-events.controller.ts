import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaEventsService } from './kafka-events.service';
import { CreateKafkaEventDto } from './dto/create-kafka-event.dto';
import { UpdateKafkaEventDto } from './dto/update-kafka-event.dto';

@Controller()
export class KafkaEventsController {
  constructor(private readonly kafkaEventsService: KafkaEventsService) {}

  @MessagePattern('createKafkaEvent')
  create(@Payload() createKafkaEventDto: CreateKafkaEventDto) {
    return this.kafkaEventsService.create(createKafkaEventDto);
  }

  @MessagePattern('findAllKafkaEvents')
  findAll() {
    return this.kafkaEventsService.findAll();
  }

  @MessagePattern('findOneKafkaEvent')
  findOne(@Payload() id: number) {
    return this.kafkaEventsService.findOne(id);
  }

  @MessagePattern('updateKafkaEvent')
  update(@Payload() updateKafkaEventDto: UpdateKafkaEventDto) {
    return this.kafkaEventsService.update(
      updateKafkaEventDto.id,
      updateKafkaEventDto,
    );
  }

  @MessagePattern('removeKafkaEvent')
  remove(@Payload() id: number) {
    return this.kafkaEventsService.remove(id);
  }
}
