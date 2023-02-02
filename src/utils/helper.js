export function filterData(searchText, restaurant) {
  const filterData = restaurant.filter((rest) =>
    rest.data.name.toLowerCase().includes(searchText)
  );
  return filterData;
}
