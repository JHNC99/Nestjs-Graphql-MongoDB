import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './leson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'sajdjhashdaj',
      name: 'Physics Class ',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
