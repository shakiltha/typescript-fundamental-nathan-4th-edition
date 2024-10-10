// test("should be false", () => {
//   expect(false).toBeFalsy();
// });

// describe("a group of test", () => {
//   test("first test", () => {
//     expect("string value").toEqual("string value");
//   });
//   it("second test", () => {
//     expect("abc").not.toEqual("def");
//   });
// });

// forcing and skipping test

// describe("a group of tests", () => {
//   test.only("first test", () => {
//     expect("string value").toEqual("string value");
//   });

//   fit("second test", () => {
//     expect("abc").not.toEqual("def");
//   });
// });

// fdescribe("a group of tests (forced)", () => {
//   it("first test", () => {
//     expect("string value").toEqual("string value");
//   });
//   it("second test", () => {
//     expect("abc").not.toEqual("def");
//   });
// });
fdescribe("a group of tests (forced and skipped)", () => {
  it("first test", () => {
    expect("string value").toEqual("string value");
  });
  xit("second test", () => {
    expect("abc").not.toEqual("def");
  });
});

// skipping test is not a good practice
