import * as tidyingUp from '../jobs/tidying-up';
import * as vacuuming from '../jobs/vacuuming';

(async () => {
  try {
    void await tidyingUp.allHouse();
    void await vacuuming.allHouse();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  process.exit(0);
})();
