
export const save = (key, value) => {
    try {
        var data = JSON.parse(localStorage.getItem(key)) || [];
        data = [...data, value]
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        //Ignore Error
    }
};

export const fetch = ( key ) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        //Ignore Error
    }
}

export const deleteRecord = ( key, data ) => {
    try {
        localStorage.setItem(key, JSON.stringify( data ));
    } catch (error) {
        
    }
}