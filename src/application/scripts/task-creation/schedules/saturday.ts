import * as dusting from '../jobs/dusting';
import * as floorCleaning from '../jobs/floor-cleaning';
import * as tidyingUp from '../jobs/tidying-up';
import * as vacuuming from '../jobs/vacuuming';

(async () => {
  try {
    void await dusting.allHouse();
    void await floorCleaning.allHouse();
    void await tidyingUp.allHouse();
    void await vacuuming.allHouse();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  process.exit(0);
})();
