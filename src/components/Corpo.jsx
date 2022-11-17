import Feeds from "./Feeds";
import Stories from "./Stories";

const Corpo = () => {
    return (
        <main>
            <div className='container'>
                <div className='container-principal'>
                    <Stories />
                    <Feeds />
                </div>
            </div>
        </main>
    );
};

export default Corpo;
