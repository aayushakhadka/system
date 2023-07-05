import logo from './logo.svg';
import './App.css';
import { Sum } from './components/Sum';
import {Form} from   './components/Form';
import{Counter} from   './components/Counter';
import{D} from       './components/D'
function App() {
  return (
    <div> 
      <Sum/>
      <Form firstName={"aayusha"} lastName={"khadka"}/>
      <Counter/>
      <D/>
    </div> 
  );
}
// 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
// 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
export default App