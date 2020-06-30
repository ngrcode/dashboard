export function store(key,object) {
    localStorage.setItem(key,object);
}

export function get(key) {
    return localStorage.getItem(key)
}

export function remove(key) {
    return localStorage.removeItem(key)
}

export default {
    store,
    get,
    remove
};



