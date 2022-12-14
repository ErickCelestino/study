import { Itask } from '../../types/task';
import Item from './item';
import style from './List.module.scss';



function List({tasks}: {tasks: Itask[]}){
    /*const [tasks,setTasks] = useState([{
        task: 'React',
        time: '02:00:00'   
    },{
        task: 'javaScript',
        time: '01:00:00'
    },{
        task: 'Typescript',
        time: '03:00:00'
    }]
    );*/
    return(
        <aside className={style.listTasks}>
            <h2>day studies</h2>
            <ul>
                {tasks.map((item,index) => (
                    <Item 
                    key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;