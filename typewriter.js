// animate a sentence, one character at a time
const sentence = "hello there from lighthouse labs";

const typewriter = () => {
  // define timer variable to increment counter
  let waitTime = 50;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, waitTime);
    waitTime += 50;
  }
  setTimeout(() => {
    // to write out on a new line
    process.stdout.write(`\n`)
  },waitTime);
};

typewriter(sentence);
