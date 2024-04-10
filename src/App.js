import './App.css';
import MyBrowser from './MyBrowser';
import { printSpiral } from './printSpiral';
import { myParseInt } from './parseInt';
import { matrix, initialData } from './data';

function App() {
  console.log(myParseInt('123') + 2);
  console.log(printSpiral(matrix));

  return (
    <div className='App'>
      <MyBrowser initialData={initialData} expandedFolders={['Folder 1']} />
    </div>
  );
}

export default App;
