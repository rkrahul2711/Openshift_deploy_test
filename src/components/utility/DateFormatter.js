function dateFormatter({ date, type }) {
    const options = {
        "short": { day: "numeric", month: "short", year: "numeric" },
        "long": { weekday: "long", day: "numeric", month: "long", year: "numeric" },
        "numeric": { day: "numeric", month: "numeric", year: "numeric" },
        "2-digit": { day: "2-digit", month: "2-digit", year: "2-digit" }
    };

    const formattedDate = new Date(date).toLocaleDateString("en-GB", options[type] || options["short"]);

    return formattedDate;
}

export default dateFormatter;