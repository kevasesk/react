
var Id=0;
console.log(React);
class ListItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            edit:false,
            value:this.props.value,
            done:false
        };
    }
    remove(){
        this.props.del(this.props.id);
    }
    update(){
        this.setState({
           edit:!this.state.edit
        })
    }
    save(){
        this.props.update(this.props.id,this.state.value);
        this.setState({
            edit:!this.state.edit
        })
    }

    render() {
        return (
            <li className="list-group-item justify-content-between" id={this.props.id}>
                <div className="row">
                    <div className="col-sm-1 text-center"><input type="checkbox" onChange={()=>{this.setState({done:!this.state.done})}} /></div>
                    <div className="col-sm-9">
                        { this.state.edit ?
                            <input type="text" value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}/> :
                            this.state.done ? <del>{this.props.value}</del> : this.props.value
                        }
                    </div>
                    <div className="col-sm-2">
                        <div className="row">
                            <div className="col-sm-4 text-right">
                                { this.state.edit ?  <a className="glyphicon glyphicon-floppy-save btn btn-primary" onClick={this.save.bind(this)}></a> : null}
                            </div>
                            <div className="col-sm-4 text-right"><a className="glyphicon glyphicon-pencil btn btn-info" onClick={this.update.bind(this)}></a></div>
                            <div className="col-sm-4 text-right"><a className="glyphicon glyphicon-remove btn btn-danger" onClick={this.remove.bind(this)}></a></div>
                        </div>
                    </div>

                </div>
            </li>
        );
    }
}

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tasks: [
                    {id:0,title:'Make gold in LoL'},
                    {id:1,title:'Go shopping'},
                    {id:2,title:'Buy a new car'},
                    {id:3,title:'go running every morning for one month'},

            ],
            title: null,
        };
    }
    addNewItem(){
        this.setState({
            tasks: this.state.tasks.concat({
                id: Id, title: this.state.title
            })
        })
        Id++;
    }
    componentDidUpdate(){
        console.log(this.state.tasks);
    }
    deleteItem(id){

        this.setState({
            tasks: this.state.tasks.filter(function( obj ) {
                return obj.id !==id;
            })
        })

    }
    updateItem(id,value){
        for (var i in this.state.tasks) {
            if (this.state.tasks[i].id == id) {
                this.state.tasks[i].title = value;
                break;
            }
        }
        this.setState({
            tasks: this.state.tasks

        })
    }
    getItems(){

        return this.state.tasks.map((item) =>
            <ListItem del={this.deleteItem.bind(this)} update={this.updateItem.bind(this)} id={item.id} value={item.title}/>
        );
    }


    render() {

        return (
            <div className="todo-list">
                <h1>TODO List :</h1>
                    <caption className="container">
                        <div className="row">
                            <div className="col-sm-10"><input type="text" onChange={(e)=>{
                                this.setState({
                                    title: e.target.value
                                });
                            }} className="form-control "/> </div>
                            <div className="col-sm-2" ><button className="btn btn-success col-sm-12" onClick={this.addNewItem.bind(this)} >New</button></div>
                        </div>
                    </caption>
                <div className=" container">
                    <ul className="list-group">
                        {this.state.value}
                        {this.getItems()}
                    </ul>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);

