import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "최은광",
    content: "오늘의 일기",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "최영현",
    content: "오늘의 일기2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "최은주",
    content: "오늘의 일기2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
        <DiaryEditor />
        <DiaryList list={dummyList}/>
    </div>
  );
}

export default App;
