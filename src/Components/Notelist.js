import { useDispatch } from "react-redux";
import { removeNote, editNote } from "../Redux/action";

export default function Notelist(props) {
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    return (
        <div className="bg-allnotes">
            <div className="card" id="note" style={{ width: "18rem", margin: "2rem" }}>
                <div className="card-body">
                    <h2 className="card-title">{props.note.title}</h2>
                    <p className="card-text">{props.note.content}</p>

                    <button
                        className="button-30"
                        onClick={() => dispatch(removeNote(props.index))}
                    >
                        Delete
                    </button>

                    <button
                        style={{ marginLeft: 6 }}
                        className="button-30"
                        onClick={() => dispatch2(editNote(props.index))}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
