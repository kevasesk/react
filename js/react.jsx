
var tasks=[
    {id:0,title:'Task 1'},
    {id:1,title:'Task 2'},
    {id:2,title:'Task 3'},
    {id:3,title:'Task 4'},

];
class ListItem extends React.Component {


    render() {
        return (
            <li className="list-group-item justify-content-between" key={this.props.id}>
                <div className="row">
                    <div className="col-sm-1 text-center"><input type="checkbox" /></div>
                    <div className="col-sm-9">{this.props.value}</div>
                    <div className="col-sm-2">
                        <div className="row">
                            <div className="col-sm-4 text-right"><a className="glyphicon glyphicon-floppy-save btn btn-primary"></a></div>
                            <div className="col-sm-4 text-right"><a className="glyphicon glyphicon-pencil btn btn-info"></a></div>
                            <div className="col-sm-4 text-right"><a className="glyphicon glyphicon-remove btn btn-danger"></a></div>
                        </div>
                    </div>

                </div>
            </li>
        );
    }
}

class TodoList extends React.Component {
    getItems()
    {
        return this.props.list.map((item) =>
            <ListItem id={item.id} value={item.title}/>
        );
    }

    render() {
        return (
            <div className="todo-list">
                <h1>TODO List :</h1>
                    <caption className="container">
                        <div className="row">
                            <div className="col-sm-10"><input type="text" className="form-control "/> </div>
                            <div className="col-sm-2" ><button className="btn btn-success col-sm-12">New</button></div>
                        </div>
                    </caption>
                <div className=" container">
                    <ul className="list-group">
                        {this.getItems()}
                    </ul>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <TodoList list={tasks} />,
    document.getElementById('todo')
);

