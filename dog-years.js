const earth = 31557600
const time = {
  earth: earth,
  mercury: 0.2408467 * earth,
  venus: 0.6151972 * earth,
  mars: 1.8808158 * earth,
  jupiter: 11.862615 * earth,
  saturn: 29.447498 * earth,
  uranus: 84.016846 * earth,
  neptune: 164.79132 * earth
}

const dogYears = (planet, seconds) => {
  return Math.round(seconds / time[planet] * 7 * 100) / 100;
}