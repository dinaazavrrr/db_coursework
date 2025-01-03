import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TaskByIdPipe implements PipeTransform {
  constructor(private prisma: PrismaService) {}

  async transform(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new InvalidEntityIdException('Task');
    }

    return id;
  }
}
