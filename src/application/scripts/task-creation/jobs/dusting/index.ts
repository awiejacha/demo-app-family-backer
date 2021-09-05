import {
  createLivingRoomDusting,
  createKitchenDusting,
  createMasterBedroomDusting,
  createKrystianBedroomDusting,
  createKarolBedroomDusting,
  createBathroomDusting,
} from '../../modules/dusting';

export async function allHouse() {
  return Promise.all([
    createLivingRoomDusting(),
    createKitchenDusting(),
    createMasterBedroomDusting(),
    createKrystianBedroomDusting(),
    createKarolBedroomDusting(),
    createBathroomDusting(),
  ]);
}
