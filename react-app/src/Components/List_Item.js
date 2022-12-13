
function List({movie_list, handleDelete}){
    
    return (
        <div>
            {movie_list.map((movie, index) => (
                <ListItem num={index} name={movie.name} email={movie.email} handleDelete={handleDelete}></ListItem>
            ))}
        </div>
    );
}
export default List;

function ListItem({num, name, email, handleDelete}) {
    return (
        <div class="whiteBoxMain">
          <span class="dark_blue">{num + 1}</span>
          <span class="dark_blue authorName">{name}</span>
          <span class="email">{email}</span>
          <button class="red_button" onClick={() => handleDelete(name)}>DELETE</button>
        </div>
    );
}

