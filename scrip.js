let al = "abcdefghijklmnopqrstuvwxyz"
let au = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let nums = "1234567890"

function update() {
    s = document.getElementById('input').value;

    s = s.replace(/[a-zA-Z0-9]/g, function(c) {
        i = al.search(c)
        if (i >= 0) {
            i = (i + 13) % 26
            return al[i]
        }

        i = au.search(c)
        if (i >= 0) {
            i = (i + 13) % 26
            return au[i]
        }

        i = nums.search(c)
        if (i >= 0) {
            return ((Number(c) + 5) % 10).toString()
        }
    })

	document.getElementById('output').value = s;
}