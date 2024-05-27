import { Module } from '@nestjs/common';
import { JobsController } from './controllers/jobs.controller';
import { WorkflowsController } from './controllers/workflows.controller';
import { JobsService } from './services/jobs.service';
import { WorkflowsService } from './services/workflows.service';

@Module({
  imports: [],
  controllers: [
    JobsController,
    WorkflowsController
  ],
  providers: [
    JobsService,
    WorkflowsService
  ],
})
export class AppModule {}
