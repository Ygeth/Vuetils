"use strict";

const utils = [];

utils.returnJsonError = (code, element) => {
  switch (code) {
    case "AVERAGE_ERR":
      return { err: "400", res: "Could not be get average compute." };
    default:
      return { err: "500", res: "Oops.." };
  }
};

utils.return = (code, element, result) => {
  switch (code) {
    case "BELONGS_COMPANY_ERR":
      return result("400", element + " could not be checked.");
    case "NOT_BELONGS_COMPANY":
      return result("401", element + " not belongs your company.");
    case "NOT_FOUND":
      return result("404", element + " not found.");
    case "OK":
      return result("200");
    case "TEST_TO_COMPARE_NOT_BELONGS_COMPANY":
      return result("401", "Comparison test not belongs your company.");
    case "TEST_NO_FINISHED":
      return result("401", "Test is not finished.");
    case "TEST_NO_FINISHED_ERR":
      return result("500", "Test could not be is finished.");
    case "NOT_BELONGS_TEST":
      return result("401", element + " not belongs test.");
    case "TOKEN_CHECK":
      return result("401", "Already token is not valid.");
    case "NOT_FOUND":
      return result("404", element + " not found.");
    case "TOKEN_CHECK_ERR":
      return result("400", "Token could not be checked.");
    case "BELONGS_TEST_ERR":
      return result("400", element + " could not be checked.");
    case "USER_ADMIN_ERR":
      return result("400", element + " could not be checked.");
    case "NEW_ERR":
      return result("400", element + " could not be created.");
    case "GET_ERR":
      return result("400", element + " could not be found.");
    case "GET_LIST_ERR":
      return result("400", element + " list could not be retrieved.");
    case "INSERT_ERR":
      return result("400", element + " could not be inserted.");
    case "UPDATE_ERR":
      return result("400", element + " could not be updated.");
    case "DELETE_ERR":
      return result("400", element + " could not be deleted.");
    case "CHANGE_PASSWD_ERR":
      return result("400", element + " could not be changed password.");
    case "AVERAGE_ERR":
      return result("400", "Could not be get average compute..");
    case "PERCENT_ERR":
      return result("400", "Could not calculate the percentage");
    default:
      return result("500", "Oops..");
  }
};

utils.renameKeys = (obj, newKeys) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};

utils.escape = (text) => {
  return text;
  // return (text) ? (new Buffer.from(text)).toString('base64') : text;
};

utils.unescape = (text) => {
  return text;
  // return (text) ? (new Buffer.from(text, 'base64')).toString('utf-8') : text;
};

utils.replaceTemplate = (rkeys, text) => {
  const regex = /\${(.*?)}/gm;
  _.each(text.match(regex), function (tag) {
    let _tag = tag.replace(regex, `$1`);
    text = rkeys[_tag] ? text.replace(tag, rkeys[_tag]) : text;
  });
  return text;
};

utils.getLang = (lang) => {
  return _.contains(populate.getLang().langs, lang) ? lang : populate.getLang().default;
};

utils.round = (x, n = 2) => {
  return parseFloat(Math.round(x * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);
};

module.exports = utils;
