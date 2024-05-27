import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { WorkflowsService } from '../services/workflows.service';
import { JobInput } from '../model/jobinput.model';
import { SubmitJobResponse } from '../model/submit.job.response.model';
import { Workflows } from '../model/workflows.model';

@Controller('Rest/Workflows')
export class WorkflowsController {
  constructor(private readonly workflowsService: WorkflowsService) {}

  @Get()
  getWorkflows(): Workflows {
    return this.workflowsService.getWorkflows();
  }

  @Get(':workflowId/JobInputs')
  getJobInputsByWorkflowId(@Param('workflowId') workflowId: string): JobInput {
    console.log(`JobInputs structure generated for workflow ${workflowId}`);
    return this.workflowsService.getJobInputsByWorkflowId(workflowId);
  }

  @Post(':workflowId/Submit')
  submitJob(@Param('workflowId') workflowId: string, @Body() jobInput: JobInput): SubmitJobResponse {
    return this.workflowsService.submitJob(workflowId, jobInput);
  }
}
