import { Controller, Get, Put, Param } from '@nestjs/common';
import { JobsService } from '../services/jobs.service';
import { JobErrorMessage } from '../model/joberrormessage.model';
import { JobMetrics } from '../model/jobmetrics.model';
import { JobProgress } from '../model/jobprogress.model';
import { JobState } from '../model/jobstate.model';
import { RestartJobResponse } from '../model/restart.job.response.model';
import { StopJobResponse } from '../model/stop.job.response.model';

@Controller('Rest/Jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get(':externalJobId/ErrorMessage')
  getJobErrorMessage(@Param('externalJobId') externalJobId: string): JobErrorMessage {
    return this.jobsService.getJobErrorMessage(externalJobId);
  }

  @Get(':externalJobId/Metrics')
  getJobMetrics(@Param('externalJobId') externalJobId: string): JobMetrics {
    return this.jobsService.getJobMetrics(externalJobId);
  }

  @Get(':externalJobId/Progress')
  getJobProgress(@Param('externalJobId') externalJobId: string): JobProgress {
    return this.jobsService.getJobProgress(externalJobId);
  }

  @Get(':externalJobId')
  getJobState(@Param('externalJobId') externalJobId: string): JobState {
    return this.jobsService.getJobState(externalJobId);
  }

  @Put(':externalJobId/Restart')
  restartJob(@Param('externalJobId') externalJobId: string): RestartJobResponse {
    return this.jobsService.restartJob(externalJobId);
  }

  @Put(':externalJobId/Stop')
  stopJob(@Param('externalJobId') externalJobId: string): StopJobResponse {
    return this.jobsService.stopJob(externalJobId);
  }
}
