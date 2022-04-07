import {useState} from 'react'

const ThemeMode = () => {

        // Day/Night Theme mode
    const [theme, setTheme] = useState({
      dark: true
    })
    
    // const className = theme.dark ? "dark" : "light"
    const style = document.createElement('style')
   
    
    function handleThemeChanging() {
      setTheme({
        ...theme,
        dark: !theme.dark
      })
      

         if(theme.dark) {
          
        const btn = document.getElementById("theme-btn")
        btn.innerHTML = 'Light mode'
        btn.style.color = "#FFD76D"
        btn.style.boxShadow = "#FFD76D 3px 1px 30px"
        // btn.style.transition = "0.1s"



      style.textContent = `
        .main, body { 
          background-color: #282A3A;
          color: rgb(237, 234, 234);
        }

        .main-table-header {
           background-color: #35374d;
          color: rgb(237, 234, 234);
        }

        .modal-content {
           background-color: #282A3A;
          color: white;
        }

         .modal-content p, .modal-content label,
         .with-love p,
         .with-love .md {
            color: rgb(237, 234, 234);
        }

        .bi-heart {
          fill: rgb(237, 234, 234);
        }
      `
      document.head.appendChild(style)
    } else {
      const btn = document.getElementById("theme-btn")

      btn.innerHTML = 'Dark mode'
      btn.style.color = "white"
      btn.style.transition = "none"
      btn.style.boxShadow = "none"
     

      style.textContent =  `
        .main, .main-table-header, body {
          background-color: white;
          color: #525F7F;
        }

        .main-table-header {
          background-color: #F6F9FC;
          text-transform: uppercase;
          font-weight: 400;
          color: #8898AA;
        }

          .modal-content {
          background-color: white;
          color: #525F7F;
        }

         .modal-content p, .modal-content label {
           color: #525F7F;

        }

         .modal-content p, .modal-content label,
         .with-love p,
         .with-love .md {
          color: #525F7F;
        }

        .bi-heart {
          fill: fill: #525F7F;
        }

        `
      document.head.appendChild(style)
    }
  

    }



    return (
     <button id="theme-btn" className="theme-btn" onClick={handleThemeChanging}>Dark mode</button> 

    )
}
 
export default ThemeMode