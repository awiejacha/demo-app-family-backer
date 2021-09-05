import {
  createLivingRoomFloorCleaning,
  createKitchenFloorCleaning,
  createMasterBedroomFloorCleaning,
  createKrystianBedroomFloorCleaning,
  createKarolBedroomFloorCleaning,
  createBathroomFloorCleaning,
} from '../../modules/floor-cleaning';

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
