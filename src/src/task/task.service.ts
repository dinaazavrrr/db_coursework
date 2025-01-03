import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  findById(id: string): Promise<Task> {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  findMany() {
    return this.prisma.task.findMany();
  }

  create(data: Prisma.TaskUncheckedCreateInput) {
    return this.prisma.task.create({
      data,
    });
  }

  updateById(id: string, data: Prisma.TaskUncheckedUpdateInput) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  deleteById(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
