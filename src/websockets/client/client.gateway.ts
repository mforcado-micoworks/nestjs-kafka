import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@WebSocketGateway()
export class ClientGateway {
  constructor(private readonly clientService: ClientService) {}

  @SubscribeMessage('createClient')
  create(@MessageBody() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @SubscribeMessage('findAllClient')
  findAll() {
    return this.clientService.findAll();
  }

  @SubscribeMessage('findOneClient')
  findOne(@MessageBody() id: number) {
    return this.clientService.findOne(id);
  }

  @SubscribeMessage('updateClient')
  update(@MessageBody() updateClientDto: UpdateClientDto) {
    return this.clientService.update(updateClientDto.id, updateClientDto);
  }

  @SubscribeMessage('removeClient')
  remove(@MessageBody() id: number) {
    return this.clientService.remove(id);
  }
}
