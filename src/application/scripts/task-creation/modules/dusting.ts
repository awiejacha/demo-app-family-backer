import Location from '../../../../domain/ValueObjects/Location';
import TaskDefinition from '../../../../domain/ValueObjects/TaskDefinition';
import makeTaskService from '../../../dependency-injection/make-task-service';

export async function createLivingRoomDusting() {
  try {
    await makeTaskService().createExclusive(
      Location.LIVING_ROOM,
      TaskDefinition.DUSTING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKitchenDusting() {
  try {
    await makeTaskService().createExclusive(
      Location.KITCHEN,
      TaskDefinition.DUSTING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createMasterBedroomDusting() {
  try {
    await makeTaskService().createExclusive(
      Location.MASTER_BEDROOM,
      TaskDefinition.DUSTING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKarolBedroomDusting() {
  try {
    await makeTaskService().createExclusive(
      Location.KAROL_BEDROOM,
      TaskDefinition.DUSTING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKrystianBedroomDusting() {
  try {
    await makeTaskService().createExclusive(
      Location.KRYSTIAN_BEDROOM,
      TaskDefinition.DUSTING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createBathroomDusting() {
  try {
    await makeTaskService().createExclusive(
      Location.BATHROOM,
      TaskDefinition.DUSTING,
    );
  } catch (error) {
    console.error(error);
  }
}
