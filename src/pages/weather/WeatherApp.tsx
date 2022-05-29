import Container from '../../component/Container';
import MainWeatherInfo from '../../component/MainWeatherInfo';
import '../../index.css';

const WeatherApp: React.FC = () => {
  return (
    <Container>
      <MainWeatherInfo />
    </Container>
  )
}

export default WeatherApp