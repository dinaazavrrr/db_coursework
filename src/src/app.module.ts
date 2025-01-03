import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { AssignmentModule } from './assignment/assignment.module';
import { PrismaClient } from '@prisma/client';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, TaskModule, AssignmentModule],
  providers: [PrismaClient],
})
export class AppModule {}
