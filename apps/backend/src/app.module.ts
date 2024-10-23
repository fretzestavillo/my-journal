import { Module } from '@nestjs/common';
import { JournalModule } from './app/journal.module';
import { JournalEntity } from './app/journal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      //   host: 'host.docker.internal',
      host: 'postgres',
      port: 5432,
      username: 'journal',
      password: 'journal',
      database: 'journal',
      entities: [JournalEntity],
      synchronize: true,
    }),

    JournalModule,
  ],
})
export class AppModule {}
