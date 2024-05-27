import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowsController } from './workflows.controller';
import { WorkflowsService } from '../services/workflows.service';

describe('WorkflowsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [WorkflowsController],
      providers: [WorkflowsService],
    }).compile();
  });
});
