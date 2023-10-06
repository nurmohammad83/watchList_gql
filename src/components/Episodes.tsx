import { useQuery } from "@apollo/client"
import { GET_EPISODES } from "../graphql/queries/queries"

const Episodes = () => {
    const {data} = useQuery(GET_EPISODES)
    console.log(data)
  return (
    <div></div>
  )
}
export default Episodes