import { useEffect, useState } from "react"
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
import { useRouter } from "next/router"

const Years = () => {
  const router = useRouter()
  const [years, setYears] = useState([
    '2022', '2023'
  ])

  return (
    <>
      <div>Year</div>
      {years.map(year => (
        <div>
          <a href={`${router.asPath}/${year}`}>{year}</a>
        </div>
      ))}
    </>
  )
}
export default Years