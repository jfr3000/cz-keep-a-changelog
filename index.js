const wrap = require('word-wrap');

module.exports = {

  // When a user runs `git cz`, prompter will
  // be executed. We pass you cz, which currently
  // is just an instance of inquirer.js. Using
  // this you can ask questions and get answers.
  //
  // The commit callback should be executed when
  // you're ready to send back a commit template
  // to git.
  //
  // By default, we'll de-indent your commit
  // template and will keep empty lines.
  prompter: function(cz, commit) {
    console.log('\nLine 1 will be cropped at 80 characters. All other lines will be wrapped after 80 characters.\n');

    cz.prompt([
      {
        type: 'input',
        name: 'subject',
        message: 'Write a short, imperative tense description of the change:\n'
      },
      {
        type: 'input',
        name: 'body',
        message: 'Provide a longer description of the change:\n'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of change that you\'re committing:',
        choices: [
          {
            name: 'Added: For new features.',
            value: 'Added'
          },
          {
            name: 'Changed: For changes in existing functionality.',
            value: 'Changed'
          },
          {
            value: 'Deprecated',
            name: 'Deprecated: For once-stable features removed in upcoming releases.'
          },
          {
            value: 'Removed',
            name: 'Removed: For deprecated features removed in this release.'
          },
          {
            value: 'Fixed',
            name: 'Fixed: For any bug fixes.'
          },
          {
            value: 'Security',
            name: 'Security: To invite users to upgrade in case of vulnerabilities.'
          }
        ]
      },
    ]).then(function(answers) {
      const maxLineWidth = 80;
      const wrapOptions = {
        trim: true,
        newline: '\n',
        indent:'',
        width: maxLineWidth
      };

      const subject = answers.subject.trim().slice(0, maxLineWidth);
      const body = wrap(answers.body, wrapOptions);
      const type = '['+answers.type+']';

      commit(type + ' ' + subject + '\n\n' + body);
    });
  }
}
