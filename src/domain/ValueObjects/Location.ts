export default class Location {
  public static readonly NOT_SPECIFIED = 'not_specified';
  public static readonly LIVING_ROOM = 'living_room';
  public static readonly KITCHEN = 'kitchen';
  public static readonly MASTER_BEDROOM = 'master_bedroom';
  public static readonly KRYSTIAN_BEDROOM = 'krystian_bedroom';
  public static readonly KAROL_BEDROOM = 'karol_bedroom';
  public static readonly BATHROOM = 'bathroom';
  public static readonly WARDROBE = 'wardrobe';
  public static readonly CLOTHES_LOCKER = 'clothes_locker';
  public static readonly LAUNDRY_LOCKER = 'laundry_locker';
  public static readonly ALL_LOCATIONS = [
    Location.NOT_SPECIFIED,
    Location.LIVING_ROOM,
    Location.KITCHEN,
    Location.MASTER_BEDROOM,
    Location.KRYSTIAN_BEDROOM,
    Location.KAROL_BEDROOM,
    Location.BATHROOM,
    Location.WARDROBE,
    Location.CLOTHES_LOCKER,
    Location.LAUNDRY_LOCKER,
  ];

  constructor(public readonly name: string) {
    if (!Location.ALL_LOCATIONS.includes(name)) {
      throw new Error(`Invalid location '${name}'`);
    }
  }

  public isSpecified(): boolean {
    return this.name !== Location.NOT_SPECIFIED;
  }
}
