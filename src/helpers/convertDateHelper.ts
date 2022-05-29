import moment from 'moment'

export const convertDate = (dt: number): string => {
    const transformed = moment(dt * 1000).format('llll')
    const [weekDay, month, day] = transformed.split(" ")
    return `${weekDay.split(",")[0]}. ${month} ${day.split(",")[0]}`
}

export const tomorrowDate = (dt: number): string => {
    return 'Tomorrow'
}