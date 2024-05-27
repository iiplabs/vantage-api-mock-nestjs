import { Test, TestingModule } from '@nestjs/testing';
import { JobsController } from './jobs.controller';
import { JobsService } from '../services/workflows.service';

describe('WorkflowsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [JobsService],
    }).compile();
  });
});
