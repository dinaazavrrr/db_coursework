import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AssignmentByIdPipe implements PipeTransform {
  constructor(private prisma: PrismaService) {}

  async transform(id: string) {
    const assignment = await this.prisma.assignment.findUnique({
      where: { id },
    });

    if (!assignment) {
      throw new InvalidEntityIdException('Assignment');
    }

    return id;
  }
}
