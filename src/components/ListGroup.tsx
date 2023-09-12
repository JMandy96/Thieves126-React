import { useState } from "react"

interface Props {
    students: string[]
    heading: string
    age: number
}

const ListGroup = ({ heading, students, age }: Props) => {
    const [selectedIdx, setSelectedIdx] = useState(-1)
    return (
        <>
            <h1>{heading}</h1>
            {students.length === 0 && <h1>No students</h1>}
            <ul className="list-group">
                {students.map((name, idx) => (
                    <li className={selectedIdx === idx ? 'list-group-item active' : 'list-group-item'} key={idx} onClick={() => {setSelectedIdx(idx)}}>{name}</li>
                ))}
            </ul>
            <p>{age}</p>
        </>
    );
};
export default ListGroup;
