import { Module } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentController } from './assignment.controller';
import { AssignmentByIdPipe } from './pipes/assignment-by-id.pipe';
import { AssignmentValidationPipe } from './pipes/assignment-validation.pipe';

@Module({
  controllers: [AssignmentController],
  providers: [AssignmentService, AssignmentByIdPipe, AssignmentValidationPipe],
})
export class AssignmentModule {}
