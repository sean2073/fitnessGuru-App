'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validIssueStatus = {
  New: true,
  Open: true,
  Assigned: true,
  Fixed: true,
  Verified: true,
  Closed: true
};

var profileFieldType = {
  gender: 'required',
  age: 'required',
  weight: 'required',
  height_ft: 'required',
  height_inch: 'required',
  waist: 'required',
  hip: 'required',
  wrist: 'required',
  forearm: 'required',
  activity: 'required',
  exercise: 'required'
};

function cleanupProfile(newProfile) {
  var cleanedUpProfile = {};
  Object.keys(newProfile).forEach(function (field) {
    if (profileFieldType[field]) cleanedUpProfile[field] = newProfile[field];
  });
  return cleanedUpProfile;
}

function convertIssue(issue) {
  if (issue.created) issue.created = new Date(issue.created);
  if (issue.completionDate) issue.completionDate = new Date(issue.completionDate);
  return cleanupIssue(issue);
}

function validateProfile(newProfile) {
  var errors = [];
  Object.keys(profileFieldType).forEach(function (field) {
    if (profileFieldType[field] === 'required' && !newProfile[field]) {
      errors.push('Missing mandatory field: ' + field);
    }
  });

  //if (!validIssueStatus[issue.status]) {
  // errors.push(`${issue.status} is not a valid status.`);
  // }

  return errors.length ? errors.join('; ') : null;
}

exports.default = {
  validateProfile: validateProfile,
  cleanupProfile: cleanupProfile,
  convertIssue: convertIssue
};