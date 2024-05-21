#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Print welcome message
console.log(chalk.rgb(255,192,0)("\n\t Welcome to CodeWithZefi - Word Counter Project\n\t"));

// Function to count characters and words
function countCharactersAndWords(paragraph: string) {
  // Count characters excluding whitespace
  const characterCount = paragraph.replace(/\s/g, '').length;

  // Count words by splitting the paragraph by whitespace and filtering out empty strings
  const wordCount = paragraph.split(/\s+/).filter(word => word.length > 0).length;

  return {
      characterCount,
      wordCount
  };
}

// Main function to run the CLI application
async function runApp() {
  const answers = await inquirer.prompt([
      {
          type: 'input',
          name: 'paragraph',
          message: 'Please enter a paragraph:',
      },
  ]);

  const paragraph = answers.paragraph;
  const result = countCharactersAndWords(paragraph);

  console.log(chalk.green(`Characters (excluding whitespace): ${result.characterCount}`));
  console.log(chalk.blue(`Words: ${result.wordCount}`));
}

// Execute the application
runApp();