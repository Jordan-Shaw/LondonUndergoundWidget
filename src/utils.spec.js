const { checkLineStatuses } = require("./utils.js");
const {
  singleLineStatus,
  twoLineStatuses,
  twoLineStatusesReversed,
} = require("./testData.js");
const { expect } = require("chai");

describe("checkStatusNums", () => {
  it("Should accept an object as a parameter and return a number", () => {
    const output = checkLineStatuses(singleLineStatus);
    expect(output).to.be.a("number");
  });
  it("If the length of the passed object's lineStatus array is 1, it should return the index position 0", () => {
    const output = checkLineStatuses(singleLineStatus);
    expect(output).to.equal(0);
  });
  it("If the length of the passed object's lineStatus array is 2 with the second having a greater severity, it should return the index position 1", () => {
    const output = checkLineStatuses(twoLineStatuses);
    expect(output).to.equal(1);
  });
  it("If the length of the passed object's lineStatus array is 2 with the first having a greater severity, it should return the index position 0", () => {
    const output2 = checkLineStatuses(twoLineStatusesReversed);
    expect(output2).to.equal(0);
  });
});
