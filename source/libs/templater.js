/* eslint-disable */

function templater(template) {
  return new Function(
    "data",
    `let output=${JSON.stringify(template)
      .replace(/{{ (.+?) }}/g, '"+($1)+"')
      .replace(/{% (.+?) %}/g, '";$1\noutput+="')};return output;`
  );
}

if (!this.window) module.exports = templater;
