![Bestfriend Treehouse](https://bestfriend-treehouse-seeds.s3.amazonaws.com/f39e3999c24445afb5a328b6c5a2f040.png)
# Bestfriend TreeHouse

Bestfriend TreeHouse is a fullstack clone of AirBnB where users can explore, book and review listings. <a href='http://bestfriend-treehouse.herokuapp.com/#/'>Live Link</a>

# Technologies

Bestfriend Treehouse is built with Ruby on Rails and PostgreSQL on the backend and utilizes JavaScript, React and Redux for the frontend state management. Syling is implemented with CSS and HTML5. Google Maps API is used to render maps on the application displaying all the spot locations.

# Features

## User Authentication

Users are able to login and signup via a modal. The users credentials is then authenticated through the backend and would relay the appropiate response to the front  where custom error messages display to guide the user. A demo user was implemented to bypass signing up should the User want to use to preview the site.

![User Authentication](https://adelqudsi.com/wp-content/uploads/2021/06/2021-06-22_13-23-55-1.gif)

## Map Filter

On the spots index page you'll find a listings of all spots that are located on the map. As you move the bounds of the map the spot locations will dynamically filter out and in the locations found within the bounds of the map.

![Map Filter](https://github.com/A-Qudsi/Bestfriend-Treehouse/blob/master/app/assets/images/MapFilter.gif)

```  
addEventListener() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
       
      this.props.updateFilter('bounds', bounds);
    });
  }
    
 ```
 
 With the use of a custom filter action the updated coordinates get sent to the backend where spots are then filtered and only show the updated spots confined within the maps bounds.
 
 ```
 export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  dispatch(fetchSpots(getState().ui.filters));
};

```
```

export const fetchSpots = (bounds) => {
  return $.ajax({
    method: "GET",
    url: "/api/spots",
    data: bounds
  });
};

```
```
  
def self.in_bounds(bounds)
    Spot.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude < ?", bounds[:northEast][:lng])
        .where("longitude > ?", bounds[:southWest][:lng])
end
 ```
 
 ## Reviews
 
 Once logged in users are able to leave reviews to the spot listing of their choosing.
 
 ![Reviews](https://github.com/A-Qudsi/Bestfriend-Treehouse/blob/master/app/assets/images/Reviews.gif)
 
 ## Reservations
 
 Once found their ideal location, users are able to reserve a spot by specifying their time of stay and the number of guests. Users can see all the reservations they've made and cancel any reservations made prior.
 
 ![Reservations](https://github.com/A-Qudsi/Bestfriend-Treehouse/blob/master/app/assets/images/Reservations.gif)
 
 # Future Features
 
 ## Search
 
 A search bar will soon be fully functional, users are able to search different parameters such as location and other features like guest size and/or ammenities.
 
 ## Seeding more spots
 
 Currently there are only 4 available locations found in Manhattan, however more spots will be seeded for other parts of NYC and some areas in California.
