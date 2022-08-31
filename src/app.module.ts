import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokersModule } from './pokers/pokers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PokersModule
  ],
})
export class AppModule {}
