const movie_list = [{name: "Presbo",email: "presbo@columbia.edu"}, {name: "John Jay Mouse", email: "mouse@columbia.edu"},{name: "Water Bottle Man", email: "water@columbia.edu"}]

function List(){
    return (
        <div>
            {movie_list.map((movie, index) => (
                <ListItem num={index+1} name={movie.name} email={movie.email}></ListItem>
            ))}
        </div>
    );
}
export default List;

function ListItem({num, name, email}) {
    return (
        <div class="whiteBoxMain">
          <span class="dark_blue">{num}</span>
          <span class="dark_blue authorName">{name}</span>
          <span class="email">{email}</span>
          <button class="red_button">DELETE</button>
        </div>
    );
}

