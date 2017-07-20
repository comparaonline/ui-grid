import toJson from 'enzyme-to-json';

export const expectClass = (component, className) => {
  expect(toJson(component)).toMatchSnapshot();
  expect(component.hasClass(className)).toBe(true);
};
