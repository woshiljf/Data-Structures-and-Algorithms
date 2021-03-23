function template(str, data) {

    var rex = /\$\{|\}/g
    str = str.replace(rex, '')

    for (let key in data) {

        var value = data[key]
        str = str.replace(key, value)
    }
    console.log(str);
    return str

}

template("${name} is  ${age} years old", { name: "Jim", age: 20 });

// var str = "${name} is  ${age} years old"

// var rex = /\$\{|\}/g
// var s = str.replace(rex, '')

// console.log(s);