import { customAlphabet } from 'nanoid';
import IdGenerator from '../domain/IdGenerator';

const nanoIdGenerator = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 12);

export default class NanoIdGenerator implements IdGenerator {
  generate(): string {
    return nanoIdGenerator();
  }
}
