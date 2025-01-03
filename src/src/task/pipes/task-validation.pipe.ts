import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class TaskValidationPipe implements PipeTransform {
  constructor(private prisma: PrismaService) {}

  async transform(data: UpdateTaskDto) {
    if (data.projectId) {
      const project = await this.prisma.project.findUnique({
        where: { id: data.projectId },
      });

      if (!project) {
        throw new InvalidEntityIdException('Project');
      }
    }

    return data;
  }
}
