function Form() {
    return (
        <form>
          <span>
            <label class="upper_text" for="name">Source Name:   </label>
          </span>
          <span>
            <input class="upper_box" type="text" id="name" />
          </span>
          <span>
            <label class="upper_text" for="email">Source Email:</label>
          </span>
          <span>
            <input class="upper_box" type="email" id="email" />
          </span>
          <button class="green_button">ADD</button>
        </form>
    );
}

export default Form;