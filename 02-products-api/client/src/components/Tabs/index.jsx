import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';
import Tab from '../../constants/tabs';

const Tabs = ({ activeTab, onTabChange }) => {
    const handleTabChange = (tab) => {
        onTabChange(tab);
    };

    return (
        <div className={styles.tabsGroup}>
            <button className={`${activeTab === Tab.Posts ? styles.active : ''}`} onClick={() => handleTabChange(Tab.Posts)}>
                Posts
            </button>
            <button className={`${activeTab === Tab.Products ? styles.active : ''}`} onClick={() => handleTabChange(Tab.Products)}>
                Products
            </button>
            <button className={`${activeTab === Tab.Form ? styles.active : ''}`} onClick={() => handleTabChange(Tab.Form)}>
                Form
            </button>
        </div>
    );
};

Tabs.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
};

export default Tabs;