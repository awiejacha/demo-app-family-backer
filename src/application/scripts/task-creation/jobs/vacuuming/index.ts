import {
  createLivingRoomVacuuming,
  createKitchenVacuuming,
  createMasterBedroomVacuuming,
  createKrystianBedroomVacuuming,
  createKarolBedroomVacuuming,
  createBathroomVacuuming,
} from '../../modules/vacuuming';

export async function allHouse() {
  return Promise.all([
    createLivingRoomVacuuming(),
    createKitchenVacuuming(),
    createMasterBedroomVacuuming(),
    createKrystianBedroomVacuuming(),
    createKarolBedroomVacuuming(),
    createBathroomVacuuming(),
  ]);
}
