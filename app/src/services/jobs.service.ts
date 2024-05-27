import { Injectable } from '@nestjs/common';
import { JobErrorMessage } from '../model/joberrormessage.model';
import { JobMetrics } from '../model/jobmetrics.model';
import { JobProgress } from '../model/jobprogress.model';
import { JobState } from '../model/jobstate.model';
import { RestartJobResponse } from '../model/restart.job.response.model';
import { StopJobResponse } from '../model/stop.job.response.model';

@Injectable()
export class JobsService {
  getJobErrorMessage(externalJobId: string): JobErrorMessage {
    console.log(`Job with external id ${externalJobId} is being checked for ErrorMessage`);

    const JobErrorMessage: string = `Random error message ${this.getRandomInt(2000000000)}`;
    return {
      JobErrorMessage
    };
  }

  getJobMetrics(externalJobId: string): JobMetrics {
    console.log(`Job with external id ${externalJobId} is being checked for Metrics`);

    const randomInt: number = this.getRandomInt(3600);
    return {
      TotalQueueTimeInSeconds: randomInt,
      TotalRunTimeInSeconds: randomInt
    };
  }

  getJobProgress(externalJobId: string): JobProgress {
    console.log(`Job with external id ${externalJobId} is being checked for Progress`);
    return {
      JobProgress: this.getRandomInt(100)
    };
  }

  getJobState(externalJobId: string): JobState {
    console.log(`Job with external id ${externalJobId} is being checked for State`);
    return {
      Job: {
        Identifier: externalJobId,
        IsMonitor: true,
        Name: 'Any job name',
        Started: '\/Date(928164000000-0400)\/',
        State: 0,
        Updated: '\/Date(928164000000-0400)\/'
      }
    };
  }

  restartJob(externalJobId: string): RestartJobResponse {
    console.log(`Job id ${externalJobId} restarted`);
    return { RestartJobSuccessful: true };
  }

  stopJob(externalJobId: string): StopJobResponse {
    console.log(`Job id ${externalJobId} stopped`);
    return { JobStopped: true };
  }

  private getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }
}
