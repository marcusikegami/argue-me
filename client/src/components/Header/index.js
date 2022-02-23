import React from "react";


function Header() {
  
    
    return (
      <header>
      <div className="container flex-row justify-space-between align-center py-3">
        <h1 className="page-title text-secondary bg-dark py-2 px-3">ArgueMe</h1>

        <ul className="flex-row">
              <li className={`ml-2 my-1 px-2 py-1 no-style bg-secondary text-dark`}>
                <a href="/login">Login</a>
              </li>                                                                                                                       
        </ul>
        
      </div>
    </header>
    )
}

export default Header;