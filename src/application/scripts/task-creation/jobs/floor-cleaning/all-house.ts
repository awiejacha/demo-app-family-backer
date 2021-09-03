import {
  createLivingRoomFloorCleaning,
  createKitchenFloorCleaning,
  createMasterBedroomFloorCleaning,
  createKrystianBedroomFloorCleaning,
  createKarolBedroomFloorCleaning,
  createBathroomFloorCleaning,
} from '../../modules/floor-cleaning';

(async () => {
  await Promise.all([
    createLivingRoomFloorCleaning(),
    createKitchenFloorCleaning(),
    createMasterBedroomFloorCleaning(),
    createKrystianBedroomFloorCleaning(),
    createKarolBedroomFloorCleaning(),
    createBathroomFloorCleaning(),
  ]);
})();
