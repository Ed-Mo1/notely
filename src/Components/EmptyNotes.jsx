import { noNotes } from "../assets"
const EmptyNotes = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={noNotes} alt="no_notes" />
      <h3>You don’t have any notes</h3>
    </div>
  )
}

export default EmptyNotes