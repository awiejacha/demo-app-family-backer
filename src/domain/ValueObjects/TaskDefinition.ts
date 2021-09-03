export default class TaskDefinition {
  public static readonly DISHES_WASHING = 'dishes_washing';
  public static readonly DUSTING = 'dusting';
  public static readonly FLOOR_CLEANING = 'floor_cleaning';
  public static readonly IRONING = 'ironing';
  public static readonly LAUNDRY_COLLECTING = 'laundry_collecting';
  public static readonly LAUNDRY_EJECTING = 'laundry_ejecting';
  public static readonly LAUNDRY_HANGING = 'laundry_hanging';
  public static readonly TIDYING_UP = 'tidying_up';
  public static readonly VACUUMING = 'vacuuming';

  public static readonly LOCATION_SPECIFIC_DEFINITIONS = [
    TaskDefinition.DUSTING,
    TaskDefinition.FLOOR_CLEANING,
    TaskDefinition.TIDYING_UP,
    TaskDefinition.VACUUMING,
  ];

  public static readonly NOT_LOCATION_SPECIFIC_DEFINITIONS = [
    TaskDefinition.DISHES_WASHING,
    TaskDefinition.IRONING,
    TaskDefinition.LAUNDRY_COLLECTING,
    TaskDefinition.LAUNDRY_EJECTING,
    TaskDefinition.LAUNDRY_HANGING,
  ];

  public static readonly ALL_DEFINITIONS = [
    ...TaskDefinition.LOCATION_SPECIFIC_DEFINITIONS,
    ...TaskDefinition.NOT_LOCATION_SPECIFIC_DEFINITIONS,
  ].sort();

  constructor(public readonly name: string) {
    if (!TaskDefinition.ALL_DEFINITIONS.includes(name)) {
      throw new Error(`Invalid task definition '${name}'`);
    }
  }

  public isLocationSpecific(): boolean {
    return TaskDefinition.LOCATION_SPECIFIC_DEFINITIONS.includes(this.name);
  }
}
