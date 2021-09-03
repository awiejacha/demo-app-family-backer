import Location from '../../../../domain/ValueObjects/Location';
import TaskDefinition from '../../../../domain/ValueObjects/TaskDefinition';
import makeTaskService from '../../../dependency-injection/make-task-service';

export async function createLivingRoomVacuuming() {
  try {
    await makeTaskService().createExclusive(
      Location.LIVING_ROOM,
      TaskDefinition.VACUUMING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKitchenVacuuming() {
  try {
    await makeTaskService().createExclusive(
      Location.KITCHEN,
      TaskDefinition.VACUUMING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createMasterBedroomVacuuming() {
  try {
    await makeTaskService().createExclusive(
      Location.MASTER_BEDROOM,
      TaskDefinition.VACUUMING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKarolBedroomVacuuming() {
  try {
    await makeTaskService().createExclusive(
      Location.KAROL_BEDROOM,
      TaskDefinition.VACUUMING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createKrystianBedroomVacuuming() {
  try {
    await makeTaskService().createExclusive(
      Location.KRYSTIAN_BEDROOM,
      TaskDefinition.VACUUMING,
    );
  } catch (error) {
    console.error(error);
  }
}

export async function createBathroomVacuuming() {
  try {
    await makeTaskService().createExclusive(
      Location.BATHROOM,
      TaskDefinition.VACUUMING,
    );
  } catch (error) {
    console.error(error);
  }
}
