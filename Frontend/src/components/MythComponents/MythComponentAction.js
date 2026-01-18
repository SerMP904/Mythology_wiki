export const LOAD_MYTHS = "LOAD_MYTHS"

export const loadMythAction = (mythsData) => {
    return {
        type: LOAD_MYTHS,
        payload: {
            mythsData,
        }
    }
}