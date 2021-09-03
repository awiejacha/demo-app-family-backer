import IdGenerator from '../../domain/IdGenerator';
import NanoIdGenerator from '../../infrastructure/NanoIdGenerator';

export default function (): IdGenerator {
  return new NanoIdGenerator();
}
