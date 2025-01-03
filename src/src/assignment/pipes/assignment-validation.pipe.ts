import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateAssignmentDto } from '../dtos/update-assignment.dto';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class AssignmentValidationPipe implements PipeTransform {
  constructor(private prismaService: PrismaService) {}

  async transform(data: UpdateAssignmentDto) {
    if (data.taskId) {
      const task = await this.prismaService.task.findUnique({
        where: {
          id: data.taskId,
        },
      });

      if (!task) {
        throw new InvalidEntityIdException('Task');
      }
    }

    if (data.projectMemberId) {
      const projectMember = await this.prismaService.project.findUnique({
        where: {
          id: data.projectMemberId,
        },
      });

      if (!projectMember) {
        throw new InvalidEntityIdException('ProjectMember');
      }
    }

    return data;
  }
}
