export default function ConvertToFahrenheit(props) {
  if (props.currentUnit === "imperial") {
    return Math.round(props.temp);
  } else {
    return Math.ceil(props.temp * (9 / 5) + 32);
  }
}
