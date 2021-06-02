const spin = () => {

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, 100);

    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, 300);

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, 500);

    setTimeout(() => {
      process.stdout.write('\r\\   ');
    }, 700);

    setTimeout(() => {
      process.stdout.write('\r\|   ');
    }, 900);

    setTimeout(() => {
      process.stdout.write('\r\/   ');
    }, 1100);

    setTimeout(() => {
      process.stdout.write('\r\-   ');
    }, 1400);
  }
}

spin();