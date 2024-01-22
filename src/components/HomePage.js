import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';




function HomePage({ employees }){
    return(
        <div>
            <h2>Home Page</h2>
            <Header />
            <SearchBar />
            <EmployeeList employees={employees} />
        </div>
    );
}

export default HomePage