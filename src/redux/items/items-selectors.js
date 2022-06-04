export const getItems = state => state.contacts.items;

export const getVisibleItems = state => {
  const filter = state.contacts.filter;
  const items = getItems(state);

  const normalizedFilter = filter.toLowerCase();
  return items.filter(item =>
    item.contactName.toLowerCase().includes(normalizedFilter),
  );
};
