

export const shareData = (data) =>  (dispatch) => {
    try {
        dispatch({
            type: 'SHARE_DATA',
            payload: data,
        });


    } catch (error) {
        console.log(error);
    }
}
export const shareNavRoute = (data) =>  (dispatch) => {
    try {
        dispatch({
            type: 'SHARE_NAV_ROUTE',
            payload: data,
        });


    } catch (error) {
        console.log(error);
    }
}
