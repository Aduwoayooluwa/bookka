export function ssSave(key: string, data: any) {
    if (typeof data !== "string") {
        data = JSON.stringify(data);

        sessionStorage.setItem(key, data);
    }
    sessionStorage.setItem(key, data)
}

export function getSStorage(key: string) {
    if (typeof window !== "undefined") {
        const storedValue = sessionStorage.getItem(key);
        // return storedValue ? JSON.parse(storedValue) : null;
        return typeof storedValue !== "string" ? JSON.parse(storedValue!) : storedValue ?? ""
    }
}

