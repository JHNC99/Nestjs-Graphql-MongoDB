import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './leson.type';
import { LessonService } from './lesson.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  //Get data
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'sajdjhashdaj',
      name: 'Physics Class ',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
  //Create data
  @Mutation((returns) => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
