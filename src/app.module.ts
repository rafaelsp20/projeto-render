import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
//import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: 'localhost', // trocaremos isso depois para a URL do Render
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'clientesdb',
      autoLoadEntities: true,
      synchronize: true, // usar true apenas em dev
    }),
    ClienteModule,
  ],
})
export class AppModule {}
