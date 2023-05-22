import {useDispatch, useSelector} from 'react-redux'
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.show)

  const increaseHandler =()=>{
    dispatch(counterActions.increase())
  }
  const increamentHandler =()=>{
    dispatch(counterActions.increament(5))
  }
  const decreaseHandler =()=>{
    dispatch(counterActions.decrease())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increament</button>
        <button onClick={increamentHandler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter
// class Counter extends Component {
//   increaseHandler (){
//     this.props.increase()
//   }
//   decreaseHandler (){
//     this.props.decrease()
//   }
//   toggleCounterHandler(){}
  
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.increaseHandler.bind(this)}>Increament</button>
//           <button onClick={this.decreaseHandler.bind(this)}>Decreament</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state =>{
//   return{
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return{
//     increase: ()=> dispatch({type: 'increase'}),
//     decrease: ()=> dispatch({type: 'decrease'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
