import { apiGet } from "./api";

export const apiCountryIndex = "/all";
export const apiCountryByNameIndex = "/name";
export const apiCountryByCodeIndex = "/alpha";
export const apiCountryByCurrencyIndex = "/currency";
export const apiCountryByLangIndex = "/lang";
export const apiCountryByCapitalIndex = "/capital";
export const apiCountryByCallingCodeIndex = "/callingcode";
export const apiCountryByRegionIndex = "/region";
export const apiCountryByRegionBlockIndex = "/regionalbloc";

export const apiCountryGet = () => {
  const url = `${apiCountryIndex}`;
  return apiGet(url);
};

export const apiCountryByNameGet = params => {
  const url = `${apiCountryByNameIndex}/${params}`;
  return apiGet(url);
};
export const apiCountryByFullNameGet = (urlPath, params) => {
  const url = `${apiCountryByNameIndex}/${urlPath}`;
  return apiGet(url, { params });
};

export const apiCountryByCodeGet = params => {
  const url = `${apiCountryByCodeIndex}/${params}`;
  return apiGet(url);
};
export const apiCountryByListCodeGet = params => {
  const url = `${apiCountryByCodeIndex}`;
  return apiGet(url, { params });
};

export const apiCountryByCurrencyGet = params => {
  const url = `${apiCountryByCurrencyIndex}/${params}`;
  return apiGet(url);
};

export const apiCountryByLangGet = params => {
  const url = `${apiCountryByLangIndex}/${params}`;
  return apiGet(url);
};

export const apiCountryByCapitalGet = params => {
  const url = `${apiCountryByCapitalIndex}/${params}`;
  return apiGet(url);
};

export const apiCountryByRegionBlockGet = params => {
  const url = `${apiCountryByRegionBlockIndex}/${params}`;
  return apiGet(url);
};

export const apiCountryByRegionGet = params => {
  const url = `${apiCountryByRegionIndex}/${params}`;
  return apiGet(url);
};
export const apiCountryByCallingCodeGet = params => {
  const url = `${apiCountryByCallingCodeIndex}/${params}`;
  return apiGet(url);
};
