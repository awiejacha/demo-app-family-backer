import {
  createLivingRoomFloorCleaning,
  createKitchenFloorCleaning,
  createMasterBedroomFloorCleaning,
  createKrystianBedroomFloorCleaning,
  createKarolBedroomFloorCleaning,
  createBathroomFloorCleaning,
} from '../../actions';

export async function allHouse() {
  return Promise.all([
    createLivingRoomFloorCleaning(),
    createKitchenFloorCleaning(),
    createMasterBedroomFloorCleaning(),
    createKrystianBedroomFloorCleaning(),
    createKarolBedroomFloorCleaning(),
    createBathroomFloorCleaning(),
  ]);
}
