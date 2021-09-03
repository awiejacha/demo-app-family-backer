import {
  createLivingRoomVacuuming,
  createKitchenVacuuming,
  createMasterBedroomVacuuming,
  createKrystianBedroomVacuuming,
  createKarolBedroomVacuuming,
  createBathroomVacuuming,
} from '../../modules/vacuuming';

(async () => {
  await Promise.all([
    createLivingRoomVacuuming(),
    createKitchenVacuuming(),
    createMasterBedroomVacuuming(),
    createKrystianBedroomVacuuming(),
    createKarolBedroomVacuuming(),
    createBathroomVacuuming(),
  ]);
})();
