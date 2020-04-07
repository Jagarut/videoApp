// import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // return _(items)
  //   .slice(startIndex)
  //   .take(pageSize)
  //   .value();
  return items.slice(startIndex, endIndex);
}
