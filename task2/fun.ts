export function getDiff(date:Date) :string{
    let year = date.getFullYear()+1;
    let dateNewYear = new Date(year + '');
    let diff = dateNewYear.getTime() - date.getTime();
    let res = new Date(diff);
    let str_timer = `${res.getUTCMonth()} monts ${res.getUTCDate() - 1} days ${res.getUTCHours()} hours`;
    return str_timer;
}