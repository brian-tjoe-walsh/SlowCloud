export const SEARCH = 'SEARCH';

export const openModal = search => {
  return {
    type: SEARCH,
    search
  };
};