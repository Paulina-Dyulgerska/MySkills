const formatingService = () => { };

formatingService.formatDate = (userDOB) => {
    const dob = new Date(userDOB);

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const day = dob.getDate();
    const monthIndex = dob.getMonth();
    const year = dob.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
}

formatingService.monthsDiff = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    const dif = date2 - date1;
    const days = Math.floor(dif / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const daysLeft = days - years * 365;
    const months = Math.floor(daysLeft / 30);

    return `${years ? `${years} years and ` : ''}${months} months`;
}

function shortenText(text) {
    if (text.length > 150) {
        text = text.slice(0, 150) + '...';
    }
    return text;
}

formatingService.shortenText = shortenText;

export default formatingService;
