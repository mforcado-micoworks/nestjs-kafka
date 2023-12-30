import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMicroserviceService } from './kafka-microservice.service';
import { CreateKafkaMicroserviceDto } from './dto/create-kafka-microservice.dto';
import { UpdateKafkaMicroserviceDto } from './dto/update-kafka-microservice.dto';

@Controller()
export class KafkaMicroserviceController {
  constructor(private readonly kafkaMicroserviceService: KafkaMicroserviceService) {}

  @MessagePattern('createKafkaMicroservice')
  create(@Payload() createKafkaMicroserviceDto: CreateKafkaMicroserviceDto) {
    return this.kafkaMicroserviceService.create(createKafkaMicroserviceDto);
  }

  @MessagePattern('findAllKafkaMicroservice')
  findAll() {
    return this.kafkaMicroserviceService.findAll();
  }

  @MessagePattern('findOneKafkaMicroservice')
  findOne(@Payload() id: number) {
    return this.kafkaMicroserviceService.findOne(id);
  }

  @MessagePattern('updateKafkaMicroservice')
  update(@Payload() updateKafkaMicroserviceDto: UpdateKafkaMicroserviceDto) {
    return this.kafkaMicroserviceService.update(updateKafkaMicroserviceDto.id, updateKafkaMicroserviceDto);
  }

  @MessagePattern('removeKafkaMicroservice')
  remove(@Payload() id: number) {
    return this.kafkaMicroserviceService.remove(id);
  }
}
