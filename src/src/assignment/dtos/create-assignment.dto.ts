import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssignmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  taskId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  projectMemberId: string;
}
