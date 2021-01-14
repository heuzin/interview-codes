function reverse(str) {
    const reverseArray = [];
    const lastStr = str.length - 1;

    for (i = lastStr; i >= 0; i--) {
        reverseArray.push(str[i]);
    }

    return reverseArray.join('');
}

reverse('suehtaM sti iH')

function reverse2(str) {
    return str.split('').reverse().join('');
}

reverse2('suehtaM sti iH')

const reverse3 = str => [...str].reverse().join('');

reverse3('suehtaM sti iH')