
type TData<T>={attributes:Omit<T,'id'>,id:number}

export async function api<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const result= await response.json()

    return result.data.map((e:TData<T>)=>({...e.attributes,id:e.id}))
  }