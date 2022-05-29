export default interface INextDay {
 
    dt: number,
    temp: {
        min: number,
        max: number
    },
    weather: {
        main: string,
        description: string
    }

}