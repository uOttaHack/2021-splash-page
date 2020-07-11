export default function TopBar() {
    return (
      <div className="container">
        <div className="topbar">
            <img src="/logo.svg" alt="uOttaHack 4 logo" className="logo"/>
            <div>
                <b style={{marginRight: 12 + 'px'}}>Questions?</b>
                <a href="mailto:hello@uottahack.ca">hello@uottahack.ca</a>
            </div>
        </div>
        
        <style jsx>
          {`
            .topbar {
                width: calc(100% - 16em);
                height: 125px;
                padding: 0 8em 0 9em;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .logo {
                width: 70px;
                height: 70px;
            }
          `}
        </style>
      </div>
    );
  }
  