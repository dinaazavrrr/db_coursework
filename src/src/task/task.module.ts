import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskByIdPipe } from './pipes/task-by-id.pipe';
import { TaskValidationPipe } from './pipes/task-validation.pipe';

@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskByIdPipe, TaskValidationPipe],
})
export class TaskModule {}
