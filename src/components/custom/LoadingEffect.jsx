import '../../assets/css/loader.css';

export const LoadingEffect = () => {
    return ( 
        <div className="LoadingOverlay">
          <div className="Line-Progress">
            <div className="indeterminate"></div>
          </div>
        </div>
     );
}