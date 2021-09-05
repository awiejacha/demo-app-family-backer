import {
  createLivingRoomVacuuming,
  createKitchenVacuuming,
  createMasterBedroomVacuuming,
  createKrystianBedroomVacuuming,
  createKarolBedroomVacuuming,
  createBathroomVacuuming,
} from '../../actions';

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
