import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  create(cliente: Partial<Cliente>) {
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }
}
