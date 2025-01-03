import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto } from './dtos/create-assignment.dto';
import { UpdateAssignmentDto } from './dtos/update-assignment.dto';
import { AssignmentByIdPipe } from './pipes/assignment-by-id.pipe';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AssignmentResponse } from './responses/assignment.response';
import { AssignmentValidationPipe } from './pipes/assignment-validation.pipe';

@Controller('assignment')
export class AssignmentController {
  constructor(private assignmentService: AssignmentService) {}

  @ApiOperation({ summary: 'Get all assignments' })
  @ApiOkResponse({
    type: [AssignmentResponse],
  })
  @Get()
  getAll() {
    return this.assignmentService.findMany();
  }

  @ApiOperation({ summary: 'Get assignment by id' })
  @ApiOkResponse({
    type: AssignmentResponse,
  })
  @Get(':id')
  getById(@Param('id', AssignmentByIdPipe) id: string) {
    return this.assignmentService.findById(id);
  }

  @ApiOperation({ summary: 'Create new assignment' })
  @ApiOkResponse({
    type: AssignmentResponse,
  })
  @Post()
  create(@Body(AssignmentValidationPipe) data: CreateAssignmentDto) {
    return this.assignmentService.create(data);
  }

  @ApiOperation({ summary: 'Update assignment by id' })
  @ApiOkResponse({
    type: AssignmentResponse,
  })
  @Patch(':id')
  updateById(
    @Param('id', AssignmentByIdPipe) id: string,
    @Body(AssignmentValidationPipe) data: UpdateAssignmentDto,
  ) {
    return this.assignmentService.updateById(id, data);
  }

  @ApiOperation({ summary: 'Delete assignment by id' })
  @ApiOkResponse({
    type: AssignmentResponse,
  })
  @Delete(':id')
  deleteById(@Param('id', AssignmentByIdPipe) id: string) {
    return this.assignmentService.deleteById(id);
  }
}
