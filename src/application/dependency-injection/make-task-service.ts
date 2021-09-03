import TaskService from '../../domain/TaskService';
import makeIdGenerator from './make-id-generator';
import makeTaskRepository from './make-task-repository';

export default function (): TaskService {
  return new TaskService(makeIdGenerator(), makeTaskRepository());
}
