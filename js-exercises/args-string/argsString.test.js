import { argsString } from "./argsString";

describe("argsString", () => {
  it("argsString does this thing...", () => {
    expect(argsString("{} {}", ["Hello", "World!"])).toBe("Hello World!");
  });

  it("argsString does that other thing...", () => {
    expect(argsString("{}! How are you?", ["Hey"])).toBe("Hey! How are you?");
  });

  it("argsString does a very cool thing...", () => {
    expect(argsString("How are you?", ["Hey", "what"])).toBe("How are you?");
  });
});
