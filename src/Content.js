import React from 'react'
import './Content.css'
function Table(){
    return(
        <div class='content'>
            <h2>Student Information</h2>
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Register No</th>
                    <th>Department</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mohamed</td>
                    <td>Nawfal</td>
                    <td>720721110092</td>
                    <td>B.Tech IT</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mohamed</td>
                    <td>Sajid</td>
                    <td>720721110093</td>
                    <td>B.Tech IT</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Naveen</td>
                    <td>karthikeyan</td>
                    <td>720721110098</td>
                    <td>B.Tech IT</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Hari</td>
                    <td>Haran</td>
                    <td>720721110073</td>
                    <td>B.Tech IT</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Mukesh</td>
                    <td>G</td>
                    <td>92091110099</td>
                    <td>AIML</td>
                </tr>
            </table>
        </div>
    )
}

function Form(){
    return(
        <div class='form1'>
            <h2>Login page</h2>
            <form>
                <label class="e1">Email:<input type='email' id="email" placeholder='email' required></input></label><br></br>
                <label class="p1">Password:<input type='password' id="password" placeholder='' required></input></label>
            </form>
            <button class="btn">submit</button>
        </div>
    )
}
function Content(){
    return(
        <div>
            <Table/>
            <Form/>
        </div>
    )
}

export default Content;