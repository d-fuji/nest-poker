import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokerGameModule } from './poker-game/poker-game.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PokerGameModule
  ],
})
export class AppModule {}
