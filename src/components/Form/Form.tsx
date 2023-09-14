import { FormEvent, useState } from "react";

const Form = () => {
    const [post, setPost] = useState({
        title: '',
        caption: '',
        imgUrl: '',
        userId: 1
    })

    const BACKEND_URL = 'http://127.0.0.1:5000/api/create_post'

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={(event) => setPost({...post, title: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Caption
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(event) => setPost({...post, caption: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Image URL:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(event) => setPost({...post, imgUrl: event.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};
export default Form;
