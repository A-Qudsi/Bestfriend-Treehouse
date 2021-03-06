import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import spotsReducer from "./spots_reducer";
import reservationsReducer from "./reservation_reducer";
import reviewReducer from "./review_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotsReducer,
  reservations: reservationsReducer,
  reviews: reviewReducer,
});

export default entitiesReducer;
