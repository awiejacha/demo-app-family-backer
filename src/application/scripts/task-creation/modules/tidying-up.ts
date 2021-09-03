import Location from '../../../../domain/ValueObjects/Location';
import TaskDefinition from '../../../../domain/ValueObjects/TaskDefinition';
import makeTaskService from '../../../dependency-injection/make-task-service';

export async function createLivingRoomTidyingUp() {
  try {
    await makeTaskService().createExclusive(
      Location.LIVING_ROOM,
      TaskDefinition.TIDYING_UP,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKitchenTidyingUp() {
  try {
    await makeTaskService().createExclusive(
      Location.KITCHEN,
      TaskDefinition.TIDYING_UP,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createMasterBedroomTidyingUp() {
  try {
    await makeTaskService().createExclusive(
      Location.MASTER_BEDROOM,
      TaskDefinition.TIDYING_UP,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKarolBedroomTidyingUp() {
  try {
    await makeTaskService().createExclusive(
      Location.KAROL_BEDROOM,
      TaskDefinition.TIDYING_UP,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKrystianBedroomTidyingUp() {
  try {
    await makeTaskService().createExclusive(
      Location.KRYSTIAN_BEDROOM,
      TaskDefinition.TIDYING_UP,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createBathroomTidyingUp() {
  try {
    await makeTaskService().createExclusive(
      Location.BATHROOM,
      TaskDefinition.TIDYING_UP,
    );
  } catch (error) {
    console.error(error);
  }
}
