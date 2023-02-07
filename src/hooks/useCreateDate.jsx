import { DateTime } from "luxon";

const useCreateDate = () => {

    // const dateObj = new Date();

    // const day = (dateObj.getDate() > 0 && dateObj.getDate() <= 9) ? `0${dateObj.getDate()}` : `${dateObj.getDate()}`

    // const month = (dateObj.getMonth() + 1 >= 1 && dateObj.getMonth() + 1 <= 9) ? `0${dateObj.getMonth() + 1}` : `${dateObj.getMonth() + 1}`;

    // const year = `${dateObj.getFullYear()}`;

    // const hours = (dateObj.getHours() > 0 && dateObj.getHours() <= 9) ? `0${dateObj.getHours()}` : `${dateObj.getHours()}`

    // const minutes = (dateObj.getMinutes() > 0 && dateObj.getMinutes() <= 9) ? `0${dateObj.getMinutes()}` : `${dateObj.getMinutes()}`


    // const date = `${day}.${month}.${year}, [${hours}:${minutes}]`

    const date = DateTime.now();

    return date.toLocaleString(DateTime.DATETIME_SHORT);
}

export default useCreateDate;