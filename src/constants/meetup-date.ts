var dayOfWeek = 5; //friday
var date = new Date();
date.setDate(date.getDate() + ((dayOfWeek + 7 - date.getDay()) % 7));
export const formatDate = new Intl.DateTimeFormat("en-US").format(date);
