const createCounter = require("./counter");

describe("Counter", () => {
  let counter;

  describe("#getCount", () => {
    describe("when counter is created", () => {
      it("it returns the initial value", () => {
        counter = createCounter();
        expect(counter.getCount()).toBe(0);
      });
    });
  });

  describe("#decrement", () => {
    describe("when decrement is called", () => {
      counter = createCounter();
      counter.decrement();
      expect(counter.getCount()).toBe(-1);
    });
  });
});
