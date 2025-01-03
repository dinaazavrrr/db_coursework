import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskByIdPipe } from './pipes/task-by-id.pipe';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { TaskResponse } from './responses/task.response';
import { AssignmentValidationPipe } from '../assignment/pipes/assignment-validation.pipe';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiOkResponse({
    type: [TaskResponse],
  })
  @Get()
  getAll() {
    return this.taskService.findMany();
  }

  @ApiOperation({ summary: 'Get task by id' })
  @ApiOkResponse({
    type: TaskResponse,
  })
  @Get(':id')
  getById(@Param('id', TaskByIdPipe) id: string) {
    return this.taskService.findById(id);
  }

  @ApiOperation({ summary: 'Create new task' })
  @ApiOkResponse({
    type: TaskResponse,
  })
  @Post()
  create(@Body(AssignmentValidationPipe) data: CreateTaskDto) {
    return this.taskService.create(data);
  }

  @ApiOperation({ summary: 'Update task by id' })
  @ApiOkResponse({
    type: TaskResponse,
  })
  @Patch(':id')
  updateById(
    @Param('id', TaskByIdPipe) id: string,
    @Body(AssignmentValidationPipe) data: UpdateTaskDto,
  ) {
    return this.taskService.updateById(id, data);
  }

  @ApiOperation({ summary: 'Delete task by id' })
  @ApiOkResponse({
    type: TaskResponse,
  })
  @Delete(':id')
  deleteById(@Param('id', TaskByIdPipe) id: string) {
    return this.taskService.deleteById(id);
  }
}
