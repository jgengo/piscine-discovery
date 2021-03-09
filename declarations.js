function deepFreeze(object) {
    const propNames = Object.getOwnPropertyNames(object);

    for (const name of propNames) {
        const value = object[name];

        if (value && typeof value === "object")
            deepFreeze(value);
    }

    return Object.freeze(object);
}

const escapeStr = "`, \\, \/, \", \'";
const arr = [4, '2']
const obj = {
    str: "test",
    num: 42,
    bool: true,
    undef: undefined
}
const nested = {
    arr: [4, undefined, '2'],
    obj: { 
        str: "string",
        num: 21,
        bool: true
    }
}

deepFreeze(nested);