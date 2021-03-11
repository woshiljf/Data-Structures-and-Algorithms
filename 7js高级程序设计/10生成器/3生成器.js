function* ntime(n) {

    if (n > 1) {
        yield n - 1
        yield* ntime(n - 1)

    }


}

for (const x of ntime(6)) {

    console.log(x);

}