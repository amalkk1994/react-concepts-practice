import { useParams } from "react-router-dom"
const IdParamPage = () => {
  let { id } = useParams()
  return <div>IdParamPage: {id}</div>
}

export default IdParamPage
