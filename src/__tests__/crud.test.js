import MockStorage from "../../__mock__/storage";
import check from "../modules/checkComplete";

describe("Check Function", () => {
  test('updates the completed status to true when checked', () => {
    const box = { checked: true };
    const item = { completed: false };
    check(box, item);
    expect(item.completed).toBe(true);
  })

  test('updates the completed status to false when unchecked', () => {
    const box = { checked: false };
    const item = { completed: true };
    check(box, item);
    expect(item.completed).toBe(false);
  })
})