const getDate = () => {
    var dayOfWeek = 5; //friday
    var date = new Date();
    const dateBlacklist = [
        new Date("2/17/2023"),
        new Date("")
    ]

    // If today is Friday, add 7 days
    if (date.getDay() === dayOfWeek) {
        date.setDate(date.getDate() + 7);
    }


    // If today is after Friday, add 7 days until we reach Friday
    while (true) {
        date.setDate(date.getDate() + ((dayOfWeek + 7 - date.getDay()) % 7));

        for (const dateBlacklisted of dateBlacklist) {

            console.log("Date Blacklisted", dateBlacklisted.toLocaleDateString())
            console.log("Date", date.toLocaleDateString())

            if (date.toLocaleDateString() === dateBlacklisted.toLocaleDateString()) {
                date.setDate(date.getDate() + 7);
                continue;
            }
        }
        break;

    }

    return new Intl.DateTimeFormat("en-US").format(date);
}
export const formatDate = getDate();