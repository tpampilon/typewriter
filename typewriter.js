const sentence = "hello there from lighthouse labs";
const consoleSentence = sentence + '\n';
let i = 50

for (const char of consoleSentence) {
  i += 100;
  setTimeout(() => {
    process.stdout.write(char)
  }, i)
};