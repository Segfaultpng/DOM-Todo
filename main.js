 /**
   * Toggle the the list items checkbox on and off
   * on 
   * <button class="btn-picto" type="button">
              <i aria-hidden="true" class="material-icons" onclick="myFunction()">check_box</i>
            </button>
   * off
   * <button class="btn-picto" type="button">
              <i aria-hidden="true" class="material-icons" onclick="myFunction()">check_box_outline_blank</i>
            </button>
   * 
   * you can also add a strike through on the words by using the class "done"
   * @param {index of item in #mytodolist} itemIndex 
   */
  var toggleCheckbox = function(itemIndex){

    //console.log(itemIndex)

    var item = document.getElementsByClassName("todoItem")[itemIndex]

    if(item.children[1].children[0].children[0].innerText == "check_box"){
        item.className = "todoItem"
        item.children[1].children[0].children[0].innerText = "check_box_outline_blank"
    }else{
        item.className = "todoItem done"
        item.children[1].children[0].children[0].innerText = "check_box"
    }
    

    //console.log(itemIndex)


  }


  /**
   * 
   * @param {index of item in #mytodolist} itemIndex 
   */
  var deleteItem = function(itemIndex){

    document.getElementsByClassName("todoItem")[itemIndex].remove();
  }


  /**
   * Use a loop to remove all elements (items)
   * 
   */
  var deleteAll = function(){

      var items = document.getElementsByClassName("todoItem")

      while (items.length > 0) {
          console.log("deleting")
          items[items.length-1].remove()
      }

  }


  /**
   * add new item to the UL by creating a new li and adding it to the ul
   * You must use document to create a new list item and append it to the UL
   * the list item should look like this
   * 
   * <li id="todoItem" class="done">
          <span class="label">Item</span>
          <div class="actions">
            <button class="btn-picto" type="button">
              <i aria-hidden="true" class="material-icons" onclick="myFunction()">check_box</i>
            </button>
            <button class="btn-picto" type="button" aria-label="Delete" title="Delete">
              <i aria-hidden="true" class="material-icons">delete</i>
            </button>
          </div>
        </li>

    * Once you want to make sure all buttons work as intended
   */
  var addNewItem = function(){
    
    var itemsLength = document.getElementsByClassName("todoItem").length

    var li = document.createElement("li");
    li.id = "todoItem"
    li.className = "todoItem"
    var itemSpan = document.createElement("span")
    itemSpan.className = "label"
    itemSpan.innerText = document.getElementById("newitem").value
   

    var actionsDiv = document.createElement("div")

    //checkbox button
    var checkBoxButton = document.createElement("button")
    checkBoxButton.className = "btn-picto"
    checkBoxButton.type = "button"

    var iCheckBox = document.createElement("i")
    iCheckBox.className = "material-icons"


    iCheckBox.addEventListener("click", function(){
        toggleCheckbox(itemsLength);
    }, false);

    iCheckBox.innerText = "check_box_outline_blank"

    checkBoxButton.appendChild(iCheckBox)

    //delete button
    var deleteButton = document.createElement("button")
    deleteButton.className = "btn-picto"
    deleteButton.type = "button"

    var iDeleteButton = document.createElement("i")
    iDeleteButton.className = "material-icons"
    iDeleteButton.addEventListener("click", function(){
        deleteItem(itemsLength);
    }, false);
    iDeleteButton.innerText = "delete"

    deleteButton.appendChild(iDeleteButton)

    actionsDiv.appendChild(checkBoxButton)
    actionsDiv.appendChild(deleteButton)

    li.appendChild(itemSpan)
    li.appendChild(actionsDiv)


    document.getElementById("mytodolist").appendChild(li)

    //console.log(li)
      //console.log(document.getElementById("newitem").value)
  }