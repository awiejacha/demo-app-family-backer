import {
  createLivingRoomTidyingUp,
  createKitchenTidyingUp,
  createMasterBedroomTidyingUp,
  createKrystianBedroomTidyingUp,
  createKarolBedroomTidyingUp,
  createBathroomTidyingUp,
} from '../../modules/tidying-up';

(async () => {
  await Promise.all([
    createLivingRoomTidyingUp(),
    createKitchenTidyingUp(),
    createMasterBedroomTidyingUp(),
    createKrystianBedroomTidyingUp(),
    createKarolBedroomTidyingUp(),
    createBathroomTidyingUp(),
  ]);
})();
