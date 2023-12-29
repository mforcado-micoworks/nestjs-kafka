import { Injectable } from '@nestjs/common';
import { CreateKafkaMicroserviceDto } from './dto/create-kafka-microservice.dto';
import { UpdateKafkaMicroserviceDto } from './dto/update-kafka-microservice.dto';

@Injectable()
export class KafkaMicroserviceService {
  create(createKafkaMicroserviceDto: CreateKafkaMicroserviceDto) {
    return 'This action adds a new kafkaMicroservice';
  }

  findAll() {
    return `This action returns all kafkaMicroservice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kafkaMicroservice`;
  }

  update(id: number, updateKafkaMicroserviceDto: UpdateKafkaMicroserviceDto) {
    return `This action updates a #${id} kafkaMicroservice`;
  }

  remove(id: number) {
    return `This action removes a #${id} kafkaMicroservice`;
  }
}
