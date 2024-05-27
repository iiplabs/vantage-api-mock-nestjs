import { Injectable } from '@nestjs/common';
import { JobInput } from '../model/jobinput.model';
import { SubmitJobResponse } from '../model/submit.job.response.model';
import { Workflows } from '../model/workflows.model';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class WorkflowsService {
  getJobInputsByWorkflowId(workflowId: string): JobInput {
    const Identifier: string = uuidv4();

    return {
      Attachments: [],
      JobName: 'Populate with your job name',
      Labels: [],
      Medias: [
        {
          Identifier,
          Data: 'Base64 encoded content',
          Description: 'Populate with your job name',
          Files: [],
          Name: 'CML'
        }
      ],
      Priority: 0,
      Variables: []
    };
  }

  getWorkflows(): Workflows {
    return {
      Workflows: [
        {
          Identifier: uuidv4(),
          Description: "Idle workflow",
          Name: "Idle workflow",
          State: 0
        },
        {
          Identifier: uuidv4(),
          Description: "Active workflow",
          Name: "Active workflow",
          State: 1
        },
        {
          Identifier: uuidv4(),
          Description: "Edited workflow",
          Name: "Edited workflow",
          State: 2
        }
      ]
    };
  }

  submitJob(workflowId: string, jobInput: JobInput): SubmitJobResponse {
    const { JobName = "" } = jobInput || {};
    console.log(`New job with name ${JobName} is being submitted to workflow ${workflowId}`);
    const JobIdentifier = uuidv4();
    return { JobIdentifier };
  }
}
