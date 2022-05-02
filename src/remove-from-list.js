
function removeKFromList(l, k) {
  let rek = l;
  while (l.value === k) {
    l = l.next;
}
while (rek.next) {
    if (rek.next.value === k) {
        rek.next = rek.next.next;
    } else {
        rek = rek.next;
    }
}
return l;
}

module.exports = {
  removeKFromList
};
