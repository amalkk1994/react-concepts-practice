import { useSearchParams } from "react-router-dom"

const QueryParamPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams()
  const [searchParams] = useSearchParams()
  return (
    <div>
      <p>Field name: {searchParams.get("name")}</p>
      <p>Field Age: {searchParams.get("age")}</p>
    </div>
  )
}
export default QueryParamPage
