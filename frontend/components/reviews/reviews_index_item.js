import React from 'react'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {body} = this.props.reviews
        return (
            <div className="review-index-item">
                {body}
            </div>
        )
    }
}

export default ReviewIndexItem