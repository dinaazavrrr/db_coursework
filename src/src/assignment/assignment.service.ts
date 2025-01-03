import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssignmentService {
  constructor(private prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.assignment.findUnique({
      where: { id },
    });
  }

  findMany() {
    return this.prisma.assignment.findMany();
  }

  create(data: Prisma.AssignmentUncheckedCreateInput) {
    return this.prisma.assignment.create({
      data,
    });
  }

  updateById(id: string, data: Prisma.AssignmentUncheckedUpdateInput) {
    return this.prisma.assignment.update({
      where: { id },
      data,
    });
  }

  deleteById(id: string) {
    return this.prisma.assignment.delete({
      where: { id },
    });
  }
}
