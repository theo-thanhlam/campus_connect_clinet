import { useEffect, useState } from "react"
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
import { useRouter } from "next/router"
const Classes = () => {
  const router = useRouter()
  const [classes, setClasses] = useState([
    '1012', '1015'
  ])

  return (
    <>
      <div>Classes</div>
      {classes.map(course => (
        <div>
          <a href={`${router.asPath}/${course}/year`}>{course}</a>
        </div>
      ))}
    </>
  )
}
export default Classes