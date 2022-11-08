var d = new Date();
var day = d.getDay();
var diff = d.getDate() - day + (day == 0 ? -6 : 5); // adjust when day is sunday
var nextFriday = new Date(d.setDate(diff));

export const formatDate = new Intl.DateTimeFormat("en-US").format(nextFriday);
