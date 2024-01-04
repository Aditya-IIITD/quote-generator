export const IS_LOADING = "loading";
export const IS_SUCCESS = "success";
export const IS_ERROR = "error";

export const isLoading = () => ({ type: IS_LOADING });
export const isSuccess = (quote) => ({ type: IS_SUCCESS, quote: { ...quote } });
export const isError = (err) => ({ type: IS_ERROR, error: err });
