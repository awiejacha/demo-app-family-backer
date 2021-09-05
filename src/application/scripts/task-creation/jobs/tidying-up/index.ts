import {
  createLivingRoomTidyingUp,
  createKitchenTidyingUp,
  createMasterBedroomTidyingUp,
  createKrystianBedroomTidyingUp,
  createKarolBedroomTidyingUp,
  createBathroomTidyingUp,
} from '../../actions';

export async function allHouse() {
  return Promise.all([
    createLivingRoomTidyingUp(),
    createKitchenTidyingUp(),
    createMasterBedroomTidyingUp(),
    createKrystianBedroomTidyingUp(),
    createKarolBedroomTidyingUp(),
    createBathroomTidyingUp(),
  ]);
}
