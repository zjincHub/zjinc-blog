export function chineseDateToDate(date: string) {
  try {
    const [year, _other_1] = date.split('年');
    const [month, _other_2] = _other_1.split('月');
    const [day, _] = _other_2.split('日');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } catch (e) {
    return new Date();
  }
}
