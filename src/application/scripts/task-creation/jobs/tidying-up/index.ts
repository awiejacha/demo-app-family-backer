import {
  createLivingRoomTidyingUp,
  createKitchenTidyingUp,
  createMasterBedroomTidyingUp,
  createKrystianBedroomTidyingUp,
  createKarolBedroomTidyingUp,
  createBathroomTidyingUp,
} from '../../modules/tidying-up';

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
