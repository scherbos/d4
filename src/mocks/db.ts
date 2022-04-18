function read(key: string) {
    const found = sessionStorage.getItem(key)
    return found ? JSON.parse(found) : []
}

function write(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const db = {
    read,
    write,
}