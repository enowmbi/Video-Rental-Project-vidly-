import React,{ Component } from 'react';


class TableHeader extends Component{

    raiseSort=(column)=>{
      console.log(column)
        const sortColumn = {...this.props.sortColumn}
        if(column === sortColumn.column){
            sortColumn.order = (sortColumn.order ==='asc'?'desc':'asc')            
        }else
        {
            sortColumn.column = column
            sortColumn.order = 'asc'
        }
      this.props.onSort(sortColumn) 
    }

    render(){
        return(
            <thead className="App-clickable">
                <tr>
                {this.props.columns.map(column =>
                        <th key={column.name || column.key} onClick={()=>this.raiseSort(column.name)}>{column.label}</th>
                )}
            </tr>
            </thead>
        )}
}

export default TableHeader
