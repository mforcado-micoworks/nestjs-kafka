import { PartialType } from '@nestjs/mapped-types';
import { CreateKafkaMicroserviceDto } from './create-kafka-microservice.dto';

export class UpdateKafkaMicroserviceDto extends PartialType(CreateKafkaMicroserviceDto) {
  id: number;
}
