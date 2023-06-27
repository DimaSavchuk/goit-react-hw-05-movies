export const buildUrl = (url, params) => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], idx) => {
    const sing = !idx ? '&' : '?';
    urlWithParams += `${sing}${key}=${value}`;
  });
  return urlWithParams;
};
