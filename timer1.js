function timer1(durations) {
  durations.forEach(duration => {
      if (duration > 0) {
          setTimeout(() => {
              process.stdout.write('\x07');
          }, duration * 1000);
      }
  });
}
const args = process.argv.slice(2).map(Number).filter(duration => !isNaN(duration) && duration > 0);
if (args.length > 0) {
  timer1(args.sort((a, b) => a - b));
}
