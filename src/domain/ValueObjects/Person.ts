export default class Person {
  public static readonly ANUSIA = 'anusia';
  public static readonly KRYSTEK = 'krystek';
  public static readonly KAROLEK = 'karolek';
  public static readonly ADRIANEK = 'adrianek';
  public static readonly ALL_PERSONS = [
    Person.ANUSIA,
    Person.KRYSTEK,
    Person.KAROLEK,
    Person.ADRIANEK,
  ];

  constructor(public readonly name: string) {
    if (!Person.ALL_PERSONS.includes(name)) {
      throw new Error(`Invalid person '${name}'`);
    }
  }
}
