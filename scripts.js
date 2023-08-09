const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

holidays[0].date = new Date(`16 December ${currentYear}`)

console.log((holidays[9] || `ID ${futureId} not created yet`))

// copied = holidays.christmas
// copied = { name: 'X-mas Day' }
const copied = {id: christmas, name: 'X-mas', date: new Date(`25 December ${currentYear} 13:25`)}
let correctDate = new Date(`25 December ${currentYear} 00:00`)

isEarlier = correctDate < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) {copied.date = correctDate}

console.log('ID change:', holidays[6].id != copied.id )
console.log('Name change:', holidays[6].name != copied.name || copied.name)
console.log('Date change:', holidays[6].date != copied.date || copied.date)

let d = new Date('24 December 2001')
let s = new Date('20 March 2001')
console.log(holidays[1].date.getTime())

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)
minDate = new Date(firstHolidayTimestamp)
maxDate = new Date(lastHolidayTimestamp)

const firstDay = minDate.getDate().toString().padStart(2,"0")
const firstMonth = (minDate.getMonth()+1).toString().padStart(2,"0")
const lastDay = maxDate.getDate().toString().padStart(2,"0")
const lastMonth = (maxDate.getMonth()+1).toString().padStart(2,"0")

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

console.log('')
const randomHoliday = holidays[parseInt(Math.random()*10)]
console.log(randomHoliday.date)