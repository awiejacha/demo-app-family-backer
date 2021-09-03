import Location from './ValueObjects/Location';
import Task from './ValueObjects/Task';
import TaskDefinition from './ValueObjects/TaskDefinition';

export default interface TaskRepository {
  findById(id:string): Promise<Task|null>;
  findByLocationAndDefinition(location: Location, definition: TaskDefinition): Promise<Task|null>;
  findNotDoneOrDoneToday(): Promise<Task[]>;
  add(task: Task): Promise<void>;
}
