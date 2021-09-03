import Location from '../../../../domain/ValueObjects/Location';
import TaskDefinition from '../../../../domain/ValueObjects/TaskDefinition';
import makeTaskService from '../../../dependency-injection/make-task-service';

export async function createLivingRoomFloorCleaning() {
  try {
    await makeTaskService().createExclusive(
      Location.LIVING_ROOM,
      TaskDefinition.FLOOR_CLEANING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKitchenFloorCleaning() {
  try {
    await makeTaskService().createExclusive(
      Location.KITCHEN,
      TaskDefinition.FLOOR_CLEANING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createMasterBedroomFloorCleaning() {
  try {
    await makeTaskService().createExclusive(
      Location.MASTER_BEDROOM,
      TaskDefinition.FLOOR_CLEANING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKarolBedroomFloorCleaning() {
  try {
    await makeTaskService().createExclusive(
      Location.KAROL_BEDROOM,
      TaskDefinition.FLOOR_CLEANING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKrystianBedroomFloorCleaning() {
  try {
    await makeTaskService().createExclusive(
      Location.KRYSTIAN_BEDROOM,
      TaskDefinition.FLOOR_CLEANING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createBathroomFloorCleaning() {
  try {
    await makeTaskService().createExclusive(
      Location.BATHROOM,
      TaskDefinition.FLOOR_CLEANING,
    );
  } catch (error) {
    console.error(error);
  }
}
