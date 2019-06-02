// javascript file
let newID = 1;

/*function to add event listener to each cell in grid */

/* the following function create table on Submit see event listener below functions */
/*function to add rows */
function addRows(table,row){
  for(let i = 0; i<row; i++){
     let trow = table.insertRow(0);
     for(let j =0; j< table.rows[1].cells.length; j++){
        let cell = trow.insertCell(0);
        cell.setAttribute("id",newID);
    }
}
}

/*function to add columns */
function addCols(table,column){
  for(let i=0; i<column; i++){
    let rcell = table.rows[0].insertCell(0);
    rcell.setAttribute("id",newID);
    for(let j = 1; j< table.rows.length; j++){
        let cell =  table.rows[j].insertCell(0);
          cell.setAttribute("id",newID);

    }
  }
}



/*function to delete rows */
function deleteRows(table,row){
  /*row should be a negative number*/
  for(let i = row; i< 0; i++){
    table.deleteRow(0);
  }
}

/*function to delete columns*/
function deleteCols(table, column){
  for(let i = 0; i< table.rows.length; i ++){
    /*column should be a negative number*/
    for(let j = column; j<0; j++){
      table.rows[i].deleteCell(0);
    }
  }
}

/* event handler function*/
function modifyGrid(event){

  event.preventDefault();
  let table = document.getElementById('Table');

/*extracts values from form*/
  let row = document.getElementById('row').value;
  let column = document.getElementById('column').value;

/*how many rows/columns to delete/add */
  row = row - table.rows.length;
  column = column - table.rows[0].cells.length;

 console.log( row + " "+ column);


/*logic of evaluations */
if ( row > 0 && column > 0){
  /*  addRowsCol(table,row, column);*/
  addCols(table,column);
  addRows(table,row);

}

else if (row < 0 && column < 0){
  /* delete cells */
    deleteRows(table,row);
    deleteCols(table,column);
}

else if ( row > 0 && column < 0){
  /* add rows, delete cells */
      deleteCols(table,column);
      addRows(table,row);
}

else if (row < 0 && column > 0){
  /*add cells, delete rows*/
  deleteRows(table,row);
  addCols(table,column);
}
else if (row === 0 && column > 0){
  /*leave rows as is add columns*/
     addCols(table,column);
}
else if (row === 0 && column < 0){
  /*leave rows delete columns */
  deleteCols(table,column);
}
else if (column === 0 && row > 0){
  /*leave columns add rows*/
   addRows(table,row);
}
else if (column === 0 && row < 0){
  /*leave columns delete rows */
  deleteRows(table,row);
}
else{
  console.log("User has not changed the grid");

 }

}

/*event listener for changes in form*/

let submission = document.getElementById('Form');
submission.addEventListener("submit",modifyGrid);
