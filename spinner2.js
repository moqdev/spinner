//Copy spinner1.js file into spinner2.js, within spinner.
//Refactor the logic to remove the repeated setTimeout statements. 

const spin = () => {
  setTimeout(() => process.stdout.write('\r|   '), 100);
  setTimeout(() => process.stdout.write('\r/   '), 400);
  setTimeout(() => process.stdout.write('\r-   '), 700);
  setTimeout(() => process.stdout.write('\r\\   '), 1000);
  setTimeout(() => process.stdout.write('\r|   '), 1300);
  setTimeout(() => process.stdout.write('\r/   '), 1600);
  setTimeout(() => process.stdout.write('\r-   '), 1900);
  setTimeout(() => process.stdout.write('\r|   '), 2100);
}


spin();