import React from 'react'

export default function NewReviewForm(props) {
    const { body, onChange, createReview } = props;
    return (
        <form className="ui form" onSubmit={createReview}>
            <div className="field">
                <label htmlFor="body">Body</label>
                <input type="text" name="body" id="body" value={body} onChange={(e) => { onChange({ body: e.target.value }) }} placeholder="Please Enter Body" />
            </div>
            <button className="ui button" type="submit">
                Submit
            </button>
        </form>
    )
}
