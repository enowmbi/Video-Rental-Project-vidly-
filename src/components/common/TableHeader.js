import React,{ Component } from 'react';


class TableHeader extends Component{

    raiseSort=(column)=>{
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

    renderSortIcon = column =>{
        if(column.name !== this.props.sortColumn.column){
        return null;
        } 
        if(this.props.sortColumn.order ==='asc'){
            return <i className="fa fa-sort-asc"></i>
        }
        return <i className="fa fa-sort-desc"></i>
    }


    render(){
        return(
            <thead>
                <tr>
                {this.props.columns.map(column =>
                    <th key={column.name || column.key}
                        className="App-clickable"
                        onClick={()=>this.raiseSort(column.name)}>
                        {column.label}{column.name?this.renderSortIcon(column):null}
                    </th>
                )}
            </tr>
            </thead>
        )}
}

export default TableHeader
