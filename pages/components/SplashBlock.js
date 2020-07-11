export default function SplashBlock() {
    return (
      <div>
        <div className="splash-block">
            <h1>uOttaHack4</h1>
        </div>
        
        <style jsx>
          {`
            .splash-block {
                positon: relative;
                z-index: 99;
                margin-top: 25px;
            }
          `}
        </style>
      </div>
    );
  }
  