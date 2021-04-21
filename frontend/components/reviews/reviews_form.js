import React from 'react';


class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: '',
            rating: '',
        };

        this.submitReview = this.submitReview.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    submitReview(e) {
        e.preventDefault();
        if (this.props.currentUser) {
            this.props.createReview({
                body: this.state.body,
                rating: this.state.rating,
                user_id: this.props.currentUser.id,
                spot_id: this.props.spot.id
            })
        } else {
            this.props.openModal('login');
        }
    }

    render() {
        const { spot } = this.props;
        return (
            <form className='reviewForm'>
                <div className='reviewsFormDiv'>
                    <input 
                        className='reviewsBodyTextarea'
                        type = "textarea" 
                        value = { this.state.body }
                        onChange = { this.update('body') } />
                </div>
                 <div className='reviewsRatingDiv'>
                    <label htmlFor="rating">Rating (between 1 and 5):</label>
                    <input 
                        className='reviewsRating'
                        id='rating'
                        name='rating'
                        min='1'
                        max='5'
                        type = "number" 
                        value = { this.state.rating }
                        onChange = { this.update('rating') } />
                </div>
                <button className='submit-button' onClick={(e) => this.submitReview(e)}>Submit Review</button>
            </form>
        )
    }
};

export default ReviewForm;
