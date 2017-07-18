export const expectClass = (component, className) => {
  expect(component).toMatchSnapshot();
  expect(component.hasClass(className)).toBe(true);
};
