import { PartialType } from '@nestjs/mapped-types';
import { CreateKafkaEventDto } from './create-kafka-event.dto';

export class UpdateKafkaEventDto extends PartialType(CreateKafkaEventDto) {
  id: number;
}
