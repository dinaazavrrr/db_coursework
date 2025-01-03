import { ApiProperty } from '@nestjs/swagger';

export class TaskResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  deadline: Date;

  @ApiProperty()
  projectId: string;
}
