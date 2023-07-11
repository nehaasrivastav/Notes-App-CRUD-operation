
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notelist from "./Notelist";
import Updateform from "./Updateform";
export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const navigate = useNavigate();

  return (
    <>
      <div className="allnotes">
        <button className="home-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <div className="heading">
          <h1>My Notes</h1>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {notes.map((note, index) => (
          <div>
            {note.edit ? (
              <Updateform note={note} index={index} />
            ) : (
              <Notelist index={index} note={note} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

