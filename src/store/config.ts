export const api = "https://ittyni.com/api";

export const apiCall = async (method: string, url: string, path: string, data?: any) => {
    const res = await fetch(`${url}/${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    })
    return res.json()
}