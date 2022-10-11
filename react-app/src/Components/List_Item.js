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

export default ListItem;