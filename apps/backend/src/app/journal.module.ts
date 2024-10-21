import { Module } from '@nestjs/common';
import { JournalController } from './journal.controller';
import { JournalService } from './journal.service';
import { JournalEntity } from './journal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JournalEntity])],
  providers: [JournalService],
  controllers: [JournalController],
})
export class JournalModule {}
