export default function ConvertToCelsius(props) {
  if (props.currentUnit === "metric") {
    return Math.round(props.temp);
  } else {
    return Math.ceil((props.temp - 32) * (5 / 9));
  }
}
