import { noResult } from "../assets"
const NoResult = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={noResult} alt="no_notes" />
      <h3>No notes found</h3>
    </div>
  )
}

export default NoResult