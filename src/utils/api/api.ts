//@ts-ignore
import qs from "qs";
export type TCommonResponse<T> = {
  id: number;
  attributes: T;
};
export async function api<T>(
  url: string,
  params: Object = { populate: "*" }
): Promise<T extends Array<any> ? TCommonResponse<T>[] : TCommonResponse<T>> {
  const host =
    process.env.REACT_APP_NODE_ENV === "production"
      ? (process.env.REACT_APP_HOST_PROD as string)
      : (process.env.REACT_APP_HOST_DEV as string);

  const query = qs.stringify(params, {
    encodeValuesOnly: true,
  });

  const response = await fetch(host + url + "?" + query);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();

  return result.data;
}
