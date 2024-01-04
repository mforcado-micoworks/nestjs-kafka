import { Test, TestingModule } from '@nestjs/testing';
import { KafkaEventsController } from './kafka-events.controller';
import { KafkaEventsService } from './kafka-events.service';

describe('KafkaEventsController', () => {
  let controller: KafkaEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KafkaEventsController],
      providers: [KafkaEventsService],
    }).compile();

    controller = module.get<KafkaEventsController>(KafkaEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
