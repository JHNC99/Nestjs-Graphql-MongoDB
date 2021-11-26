import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
