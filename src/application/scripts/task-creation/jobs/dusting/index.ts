import {
  createLivingRoomDusting,
  createKitchenDusting,
  createMasterBedroomDusting,
  createKrystianBedroomDusting,
  createKarolBedroomDusting,
  createBathroomDusting,
} from '../../actions';

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
