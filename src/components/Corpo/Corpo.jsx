import "./Corpo.css";
import Feeds from "../Feeds/Feeds";
import Sidebar from "../Sidebar/Sidebar";
import Stories from "../Stories/Stories";
import SideBarMenuBottom from "../SideBarMenuBottom/SideBarMenuBottom";

const Corpo = () => {
    return (
        <main>
            <div className='container'>
                <div className='container-principal'>
                    <Stories />
                    <Feeds />
                </div>
                <Sidebar />
            </div>
            <SideBarMenuBottom />
        </main>
    );
};

export default Corpo;
