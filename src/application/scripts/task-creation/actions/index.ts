import TaskAlreadyExistsError from '../../../../domain/Errors/TaskAlreadyExistsError';
import Location from '../../../../domain/ValueObjects/Location';
import TaskDefinition from '../../../../domain/ValueObjects/TaskDefinition';
import makeLogger from '../../../dependency-injection/make-logger';
import makeTaskService from '../../../dependency-injection/make-task-service';

const logger = makeLogger();
const taskService = makeTaskService();

const createExclusiveTask = async (location: string, definition: string) => {
  logger.info('Creating exclusive task', { location, definition });
  try {
    await taskService.createExclusive(location, definition);
  } catch (error) {
    if (error instanceof TaskAlreadyExistsError) {
      logger.info(error.message, { location, definition });
    } else {
      logger.error('Error during creation of exclusive task', { location, definition, error });
    }
  }
};

export async function createLivingRoomDusting() {
  return createExclusiveTask(Location.LIVING_ROOM, TaskDefinition.DUSTING);
}

export async function createKitchenDusting() {
  return createExclusiveTask(Location.KITCHEN, TaskDefinition.DUSTING);
}

export async function createMasterBedroomDusting() {
  return createExclusiveTask(Location.MASTER_BEDROOM, TaskDefinition.DUSTING);
}

export async function createKarolBedroomDusting() {
  return createExclusiveTask(Location.KAROL_BEDROOM, TaskDefinition.DUSTING);
}

export async function createKrystianBedroomDusting() {
  return createExclusiveTask(Location.KRYSTIAN_BEDROOM, TaskDefinition.DUSTING);
}

export async function createBathroomDusting() {
  return createExclusiveTask(Location.BATHROOM, TaskDefinition.DUSTING);
}

export async function createLivingRoomFloorCleaning() {
  return createExclusiveTask(Location.LIVING_ROOM, TaskDefinition.FLOOR_CLEANING);
}

export async function createKitchenFloorCleaning() {
  return createExclusiveTask(Location.KITCHEN, TaskDefinition.FLOOR_CLEANING);
}

export async function createMasterBedroomFloorCleaning() {
  return createExclusiveTask(Location.MASTER_BEDROOM, TaskDefinition.FLOOR_CLEANING);
}

export async function createKarolBedroomFloorCleaning() {
  return createExclusiveTask(Location.KAROL_BEDROOM, TaskDefinition.FLOOR_CLEANING);
}

export async function createKrystianBedroomFloorCleaning() {
  return createExclusiveTask(Location.KRYSTIAN_BEDROOM, TaskDefinition.FLOOR_CLEANING);
}

export async function createBathroomFloorCleaning() {
  return createExclusiveTask(Location.BATHROOM, TaskDefinition.FLOOR_CLEANING);
}

export async function createLivingRoomTidyingUp() {
  return createExclusiveTask(Location.LIVING_ROOM, TaskDefinition.TIDYING_UP);
}

export async function createKitchenTidyingUp() {
  return createExclusiveTask(Location.KITCHEN, TaskDefinition.TIDYING_UP);
}

export async function createMasterBedroomTidyingUp() {
  return createExclusiveTask(Location.MASTER_BEDROOM, TaskDefinition.TIDYING_UP);
}

export async function createKarolBedroomTidyingUp() {
  return createExclusiveTask(Location.KAROL_BEDROOM, TaskDefinition.TIDYING_UP);
}

export async function createKrystianBedroomTidyingUp() {
  return createExclusiveTask(Location.KRYSTIAN_BEDROOM, TaskDefinition.TIDYING_UP);
}

export async function createBathroomTidyingUp() {
  return createExclusiveTask(Location.BATHROOM, TaskDefinition.TIDYING_UP);
}

export async function createLivingRoomVacuuming() {
  return createExclusiveTask(Location.LIVING_ROOM, TaskDefinition.VACUUMING);
}

export async function createKitchenVacuuming() {
  return createExclusiveTask(Location.KITCHEN, TaskDefinition.VACUUMING);
}

export async function createMasterBedroomVacuuming() {
  return createExclusiveTask(Location.MASTER_BEDROOM, TaskDefinition.VACUUMING);
}

export async function createKarolBedroomVacuuming() {
  return createExclusiveTask(Location.KAROL_BEDROOM, TaskDefinition.VACUUMING);
}

export async function createKrystianBedroomVacuuming() {
  return createExclusiveTask(Location.KRYSTIAN_BEDROOM, TaskDefinition.VACUUMING);
}

export async function createBathroomVacuuming() {
  return createExclusiveTask(Location.BATHROOM, TaskDefinition.VACUUMING);
}
