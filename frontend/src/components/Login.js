import React from 'react';

function Login(){
    const doLogin = async event =>{  
        event.preventDefault();
        alert('doIt()');
    };

    return(
        <div id="loginDiv">
            <form onSubmit={doLogin}>
                <span id="inner-title">PLEASE LOG IN</span><br />
                <input type="text" id="loginName" placeholder="Username"/><br />
                <input type="password" id="loginPassword" placeholder="Password" /><br />
                <input type="submit" id="loginButton" className="buttons" value = "Do It" onClick={doLogin} />
            </form>
            <span id="loginResult"></span>
        </div>
    );
};

export default Login;