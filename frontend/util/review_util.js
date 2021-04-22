export const fetchReviews = spotId => {
    debugger
    return $.ajax ({
        method: 'GET',
        url: `/api/reviews/`,
        data: { spotId }
    });
}

export const fetchReview = reviewId => {
    return $.ajax({
        method: 'GET',
        url: `api/reviews/${reviewId}`
    })
}

export const createReview = review => {
    return $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: { review }
    })
}

export const destroyReview = reviewId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
}