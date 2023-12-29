import { Test, TestingModule } from '@nestjs/testing';
import { KafkaMicroserviceService } from './kafka-microservice.service';

describe('KafkaMicroserviceService', () => {
  let service: KafkaMicroserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaMicroserviceService],
    }).compile();

    service = module.get<KafkaMicroserviceService>(KafkaMicroserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
