export default interface ICurrent {
    cord: {
      lon: number,
      lat: number
    },
    weather: {
      id: number,
      main: string,
    },
    main: {
      temp: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number
    },
    wind: {
      speed: number,
      deg: number
    },
    dt: number,
    name: string
  
  }