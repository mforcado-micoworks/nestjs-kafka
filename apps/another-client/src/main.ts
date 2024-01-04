import { NestFactory } from '@nestjs/core';
import { AnotherClientModule } from './another-client.module';

async function bootstrap() {
  const app = await NestFactory.create(AnotherClientModule);
  await app.listen(3000);
}
bootstrap();
