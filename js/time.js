window.onload = displayClock();
function displayClock() {
  const monthNames = [
    'Jan',
    'Feb',
    'Mär,
    'Apr',
    'Mai,
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Ok',
    'Nov',
    'Dez,
  ];

  // Set to true to use a 12 hour date format
  var format_12hour = false;

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ampm = '';

  if (format_12hour) {
    ampm = hh >= 12 ? ' pm' : ' am';
    hh = hh % 12;
    hh = hh ? hh : 12; //show mod 0 as 12
  }

  document.getElementById('hour').innerText = hh;
  document.getElementById('separator').innerHTML = ' : ';
  document.getElementById('minutes').innerText = min + ampm;

  document.getElementById('day').innerText = dd;
  document.getElementById('month').innerText = mm;
  
  setTimeout(displayClock, 1000);
}
