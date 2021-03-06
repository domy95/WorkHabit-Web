class utils {
    IsJson(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    isObject (something) {
        if (typeof something != 'string')
            something = JSON.stringify(something);

        try {
            JSON.parse(something);
            return true;
        } catch (e) {
            return false;
        }
    }

    getTime(hour, minute)
    {
        let h = moment().hour(hour).minute(minute).startOf('minute');
        return h;
    }
}