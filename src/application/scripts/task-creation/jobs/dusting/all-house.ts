import {
  createLivingRoomDusting,
  createKitchenDusting,
  createMasterBedroomDusting,
  createKrystianBedroomDusting,
  createKarolBedroomDusting,
  createBathroomDusting,
} from '../../modules/dusting';

(async () => {
  await Promise.all([
    createLivingRoomDusting(),
    createKitchenDusting(),
    createMasterBedroomDusting(),
    createKrystianBedroomDusting(),
    createKarolBedroomDusting(),
    createBathroomDusting(),
  ]);
})();
