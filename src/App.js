import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAction } from './Redux/Action';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  useEffect(() => {
    dispatch(fetchUserAction());
  }, [])

  return (
    <div className="App">
      {user}
    </div>
  );
}

export default App;
