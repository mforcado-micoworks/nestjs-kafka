import { Test, TestingModule } from '@nestjs/testing';
import { KafkaMicroserviceController } from './kafka-microservice.controller';
import { KafkaMicroserviceService } from './kafka-microservice.service';

describe('KafkaMicroserviceController', () => {
  let controller: KafkaMicroserviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KafkaMicroserviceController],
      providers: [KafkaMicroserviceService],
    }).compile();

    controller = module.get<KafkaMicroserviceController>(KafkaMicroserviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
