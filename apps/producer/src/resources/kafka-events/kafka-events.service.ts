import { Injectable } from '@nestjs/common';
import { CreateKafkaEventDto } from './dto/create-kafka-event.dto';
import { UpdateKafkaEventDto } from './dto/update-kafka-event.dto';

@Injectable()
export class KafkaEventsService {
  create(createKafkaEventDto: CreateKafkaEventDto) {
    return 'This action adds a new kafkaEvent';
  }

  findAll() {
    return `This action returns all kafkaEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kafkaEvent`;
  }

  update(id: number, updateKafkaEventDto: UpdateKafkaEventDto) {
    return `This action updates a #${id} kafkaEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} kafkaEvent`;
  }
}
