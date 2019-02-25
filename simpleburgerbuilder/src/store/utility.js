export const updateObject = (oldeObject, updatedProperties) => {
  return {
    ...oldeObject,
    ...updatedProperties
  };
};
