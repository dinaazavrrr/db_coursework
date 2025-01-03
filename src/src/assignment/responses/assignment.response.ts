import { ApiProperty } from '@nestjs/swagger';

export class AssignmentResponse {
  @ApiProperty()
  taskId: string;

  @ApiProperty()
  projectId: string;
}
