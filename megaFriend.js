function megaFriend(name) {
    var maxChar = "a";
    for (i = 0; i < name.length; i++) {
        var element = name[i];
        if (element.length > maxChar.length) {
            maxChar = element
        }
    }
    return maxChar
}

var result = megaFriend(['rashed', 'khaled', 'jual', 'robiul', 'Junaid Bin Zaman']);

console.log(result)