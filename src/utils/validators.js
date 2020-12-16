export const required = value => {
    if (value && value !== '') {
        return undefined;
    }
    return 'Required';
}

export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    }
    return undefined;
}