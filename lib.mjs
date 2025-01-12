export function range(start, stop, step_size = 1) {
    if(!stop) {
        return Array.from({ length: start }, (_, i) => (i));
    }

    const length = Math.floor((stop - start) / step_size);
    return Array.from({ length }, (_, i) => (i * step_size + start)); 
}