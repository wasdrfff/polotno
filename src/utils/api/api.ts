type TData<T> = { attributes: Omit<T, "id">; id: number };

export async function api<T>(url: string): Promise<T> {
  let host = "";
  const params = "?populate=*";

  if (process.env.REACT_APP_NODE_ENV === "development") {
    host = process.env.REACT_APP_HOST_DEV as string;
  }

  if (process.env.REACT_APP_NODE_ENV === "production") {
    host = process.env.REACT_APP_HOST_PROD as string;
  }

  const response = await fetch(host + url + params);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return result.data.map((e: TData<T>) => ({ ...e.attributes, id: e.id }));
}
