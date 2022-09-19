import Link from 'next/link'
const TimeLine = ({ userName }) => {
  return (
    <div>
      <h1>This is the timeLine of {userName} </h1>

      <Link href='/'>
        Go Home
      </Link>
    </div>
  )
}

export default TimeLine

TimeLine.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
}