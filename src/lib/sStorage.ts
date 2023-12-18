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

//
// <span className="px-2 py-1 bg-red-200 text-red-800 rounded-md" >
//     <TagIcon className="w-4 h-4 inline-block mr-1" />
//         Office
//         < /span>

// <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md" >
//     <TagIcon className="w-4 h-4 inline-block mr-1" />
//         Home
//         < /span>