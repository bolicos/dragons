export function orderListByProperty<T>(list: Array<T>, field: string): Array<T> {
  return list.sort((firstElement, seconddElement): number => {
    const first = getFieldValue<typeof firstElement>(firstElement, field);
    const second = getFieldValue<typeof seconddElement>(seconddElement, field);
    if (first > second) return 1;
    if (first > second) return -1;
    return 0;
  });
}

const getFieldValue = <T>(element: T, field: string) => {
  const value = Object.entries(element).find((entry) => field === entry[0]);
  return value ? value[1] : undefined;
};
