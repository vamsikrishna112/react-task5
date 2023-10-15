import {useState} from 'react';
import './styles.css';
function Age(){
    const [year, setYear] = useState('_');

    const handleclick = () =>{
        var currentdate = document.getElementById("birth").value;
        var birth = new Date(currentdate);
        var present = new Date();
        var pmonth = present.getMonth();
        var bmonth = birth.getMonth();
        var ans = (present.getFullYear())-(birth.getFullYear());
        if(pmonth-bmonth > 0){
            setYear(ans);
        }
        else if(pmonth-bmonth === 0){
            if((present.getDate() - birth.getDate()) >= 0){
                setYear(ans);
            }
            else{
                setYear(ans-1);
            }
        }
        else{
            setYear(ans-1);
        }
    }

    return(
        <div>
            <h1>Age Calculator</h1>
            <h3>Enter your date of birth</h3>
            <input type="date" id="birth"/>
            <br/><br/>
            <button onClick={handleclick}>Calculate Age</button>
            <h2>You are {year} years old</h2>
        </div>
    )
}

export default Age;