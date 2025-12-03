export const getImageUrl = (item: any) => {
  return item?.album?.images?.[0]?.url || item?.images?.[0]?.url || '';
};