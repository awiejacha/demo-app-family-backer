import rotatingFileStream from 'rotating-file-stream';

const pad = num => (num > 9 ? '' : '0') + num;

export default (options) => {
  return rotatingFileStream.createStream((time) => {
    if (!time) {
      time = new Date();
    }

    const month = time.getFullYear() + '' + pad(time.getMonth() + 1);
    const day = pad(time.getDate());
    const hour = pad(time.getHours());

    const path = options.path.split('.');
    const extension = path.pop();

    return `${path.join('.')}-${month}${day}-${hour}.${extension}`;
  }, {
    interval: options.interval,
  });
};
