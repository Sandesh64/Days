function solution(D) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let dayValues = {};
  let result = {};
  
  // Initialize dayValues with 0 for each day of the week
  for (let day of daysOfWeek) {
    dayValues[day] = 0;
  }
  
  // Add up the values for each day of the week
  for (let date in D) {
    const dayOfWeek = daysOfWeek[new Date(date).getDay()];
    dayValues[dayOfWeek] += D[date];
  }
  
  // Fill in missing days with the average of neighboring days
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    if (dayValues[day] === 0) {
      const prevDay = i === 0 ? daysOfWeek[6] : daysOfWeek[i-1];
      const nextDay = i === 6 ? daysOfWeek[0] : daysOfWeek[i+1];
      dayValues[day] = Math.floor((dayValues[prevDay] + dayValues[nextDay]) / 2);
    }
  }
  
  // Convert dayValues to the desired output format
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    result[day] = dayValues[day];
  }
  
  return result;
}
