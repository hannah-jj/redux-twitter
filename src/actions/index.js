var startHour = 0;
var endHour = 23;

function randomDate(startDate) {
  var date = startDate;
  date.setDate(Math.random()*100);
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

var twits = [
	{imgid: 1, name: "hannah", note: "hello a note", time: randomDate(new Date(2017, 1, 1))},
	{imgid: 2, name: "han", note: "hello another note", time: randomDate(new Date(2017, 1, 1))},
	{imgid: 3, name: "hann", note: "hello i am tired of a note", time: randomDate(new Date(2017, 1, 1))},
	{imgid: 4, name: "hanna", note: "hello let's code!", time: randomDate(new Date(2017, 1, 1))},
  {imgid: 5, name: "ruby", note: "hello let's get some real api!", time: randomDate(new Date(2017, 1, 1))},
  {imgid: 6, name: "js", note: "hello all right tomorrow", time: randomDate(new Date(2017, 1, 1))}
];

//success msgs and payloads for reducer
function success(msg, payload) {
  return {type: msg, payload: payload};
}

//fetch twits from twits
//to be updated with actual api
const fetchTs = () => {
  return function(dispatch) {
    return dispatch(success('FETCH_TS', twits))
  }
}

const addT = (newT) => {
  return function(dispatch) {
    return dispatch(success('ADD', newT))
  }
}

export {
	fetchTs,
  addT
}
