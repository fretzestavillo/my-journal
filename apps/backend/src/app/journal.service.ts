import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JournalEntity } from './journal.entity';
import { Repository } from 'typeorm';
import { MessageDto } from './journal.dto';

@Injectable()
export class JournalService {
  constructor(
    @InjectRepository(JournalEntity)
    private journalRepository: Repository<JournalEntity>
  ) {}

  getData(): Promise<JournalEntity[]> {
    const user = this.journalRepository.find();
    return user;
  }

  postData(message: MessageDto): Promise<JournalEntity> {
    const { title, content } = message;

    const user = this.journalRepository.create({
      title,
      content,
    });
    return this.journalRepository.save(user);
  }
}
