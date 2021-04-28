import React from 'react'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {body, rating} = this.props.review
        return (
            <div className="review-index-item">
                {body}{rating}
            </div>
        )
    }
}

export default ReviewIndexItem