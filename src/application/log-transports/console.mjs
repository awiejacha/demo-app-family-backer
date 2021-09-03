import { Writable } from 'stream';

export default () => {
  return new Writable({
    write(chunk, enc, cb) {
      console.log(chunk.toString());
      cb();
    },
  });
};
